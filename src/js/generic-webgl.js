window.addEventListener('load', run, false);

const scaleFactor = SCALE_FACTOR ?? 2;

// Adapted from MDN
function buildShaderProgram(shaderInfo) {
  const program = gl.createProgram();

  shaderInfo.forEach((desc) => {
    const code = document.getElementById(desc.id).firstChild.nodeValue;
    const shader = gl.createShader(desc.type);

    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
    }

    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error linking shader program:', gl.getProgramInfoLog(program));
  }

  return program;
}

function run() {
  glCanvas = document.getElementById('background');
  gl = glCanvas.getContext('webgl');

  const shaderSet = [
    {
      type: gl.VERTEX_SHADER,
      id: 'vertex-shader',
    },
    {
      type: gl.FRAGMENT_SHADER,
      id: 'fragment-shader',
    },
  ];

  const shaderProgram = buildShaderProgram(shaderSet);
  gl.useProgram(shaderProgram);

  const uScalingFactor = gl.getUniformLocation(shaderProgram, 'u_scalingFactor');
  const uScale = gl.getUniformLocation(shaderProgram, 'u_scale');
  const uOffset = gl.getUniformLocation(shaderProgram, 'u_offset');
  const uTime = gl.getUniformLocation(shaderProgram, 'u_time');

  const vertexArray = new Float32Array([
    1, 1, 0,
    -1, 1, 0,
    1, -1, 0,
    -1, -1, 0
  ]);
  const vertexCount = vertexArray.length / 3;

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(shaderProgram, 'a_pos');
  gl.enableVertexAttribArray(aPosition);

  function render() {
    const [width, height] = [glCanvas.clientWidth/scaleFactor, glCanvas.clientHeight/scaleFactor];
    if (glCanvas.width !== width || glCanvas.height !== height) {
      glCanvas.width  = width;
      glCanvas.height = height;
    }

    // Ensure any aspect ratio keeps the effect square and centered
    let scale, offset;
    if (width > height) {
      scale = height;
      offset = [(width/height - 1) / 2, 0];
    } else {
      scale = width;
      offset = [(height/width - 1) / 2, 0];
    }

    gl.uniform1f(uScale, scale);
    gl.uniform2fv(uOffset, offset);
    gl.uniform1f(uTime, (performance.now() / 1000.0));

    gl.viewport(0, 0, width, height);
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexCount);

    requestAnimationFrame(render);
  }

  render();
}