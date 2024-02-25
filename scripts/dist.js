const fs = require('fs');
const { glob } = require('glob');
const { cmdRegPack } = require('regpack');
const minify = require('@node-minify/core');
const terser = require('@node-minify/terser');

const inDirJS = 'build/min';
const outDirJS = 'build/dist';
const inDirStatics = 'src';
const outDir = 'docs';

// Use RegPack to create a smaller but nearly impossible to read file
const REG_PACK = false;

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
}

const go = async () => {
  // Ensure directories exists
  ensureDir(outDir);
  ensureDir(`${outDir}/img`);
  ensureDir(outDirJS);

  // Crush each js file
  const jsfiles = await glob(`${inDirJS}/*.js`);
  jsfiles.forEach(input => {
    const output = input.replace(inDirJS, outDirJS);

    if (REG_PACK) {
      // RegPack - obscure and compress
      const originalContents = fs.readFileSync(input, 'utf8');
      const outputSrc = cmdRegPack(originalContents, {});

      fs.writeFileSync(output, outputSrc);
    } else {
      // Minify hand-edited further
      minify({
        compressor: terser,
        input,
        output,
        options: {}
      });
    }
  });

  // Copy html to root and inline js
  const htmlfiles = await glob(`${inDirStatics}/*.html`);
  htmlfiles.forEach(input => {
    let html = fs.readFileSync(input, 'utf8');

    const jsMatch = html.match(/<script src="js\/(.+)"><\/script>/i);

    const jsContents = fs.readFileSync(`${outDirJS}/${jsMatch[1]}`, 'utf8');
    html = html.replace(jsMatch[0], `
    <script>
      ${jsContents}
    </script>
    <code>
      ${jsContents}
    </code>`);

    const output = input.replace(inDirStatics, outDir);
    fs.writeFileSync(output, html);
  });

  // Copy images
  const imgfiles = await glob(`${inDirStatics}/img/*`);
  imgfiles.forEach(input => {
    const output = input.replace(inDirStatics, outDir);
    fs.copyFileSync(input, output);
  });
};

go();