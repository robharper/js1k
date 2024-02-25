const fs = require('fs');
const { glob } = require('glob');
const minify = require('@node-minify/core');
const terser = require('@node-minify/terser');

const inDir = 'src/js';
const outDir = 'build/min';

const go = async () => {
  // Ensure directory exists
  if (!fs.existsSync(outDir)){
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Minify each js file
  const jsfiles = await glob(`${inDir}/*.js`);
  jsfiles.forEach(input => {
    const output = input.replace(inDir, outDir);
    minify({
      compressor: terser,
      input,
      output,
      options: {
        compress: { drop_console: true },
        format: { beautify: true },
        mangle: { toplevel: true }
      }
    });
  });
};

go();