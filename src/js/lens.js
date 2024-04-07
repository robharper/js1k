var img = new Image();
img.onload = function(){
  // Shortcuts and constants
  var M = Math;
  var sin = M.sin;
  var cos = M.cos;
  var PI = M.PI;
  var rAF = requestAnimationFrame;
  var now = Date.now;

  var width = 320, widthH = width/2;
  var height = 240, heightH = height/2;
  var lensX = widthH;
  var lensY = heightH;
  var lensVX = 0.07;
  var lensVY = 0.04;
  var lensSize = 50;
  var lensRegionWidth = width-2*lensSize;
  var lensRegionHeight = height-2*lensSize;

  var lightX = -0.5, lightY = -0.5, lightZ = 0.7071;
  var lightIntensity = 150;
  var shininess = 4;

  var start = now();

  // Setup

  var canvas = document.body.children[0];
  canvas.style.width = '640px';

  var ctx = canvas.getContext('2d');
  ctx.drawImage(img,0,0);
  var imageData = ctx.getImageData(0, 0, img.width, img.height).data;

  // Create buffer
  var buffer = ctx.createImageData(width, height);
  var bufferData = buffer.data;
  // Set alpha opaque on buffer
  for (var i=3;i<buffer.data.length; i+=4) {
    bufferData[i] = 255;
  }

  var t, x, y, scale, lx, ly, lz, u, v, highlight, src, dest, temp;

  // Render
  var draw = function() {
    t = now() - start;

    // Range 0.2 -> 6, abs(cos) function
    scale = 1.5/(8*Math.abs(cos(t/5000 + PI/2)) + 0.25);
    // Continual rotation at a period of about 9 sec
    rot = t/1500;
    // Reflect lens motion at screen edges
    lensX = Math.abs(((lensVX*t) % (2*lensRegionWidth)) - lensRegionWidth) + lensSize;
    lensY = Math.abs(((lensVY*t) % (2*lensRegionHeight)) - lensRegionHeight) + lensSize;

    dest = 0;
    for (y=0; y<height; y++) {
      // Do y-calcs for lens once per line
      ly = (y-lensY)/lensSize;
      lensV = (2*M.asin(ly)/PI) * lensSize + lensY;

      for (x=0; x<width; x++) {
        // Apply lens
        // Find spherical coordinate of current x/y pixel
        lx = (x-lensX)/lensSize;
        lz = 1 - lx*lx - ly*ly;
        if (lz > 0) {
          // Within lens sphere
          lz = M.sqrt(lz);
          // Calculate u,v sphere map
          u = (2*M.atan2(lx, lz)/PI) * lensSize + lensX;
          v = lensV;
          // Calculate lighting effect
          highlight = M.pow((lx*lightX + ly*lightY + lz*lightZ),shininess)*lightIntensity;
        } else {
          // Not in lens: u,v = x,y, no highlight
          u = x;
          v = y;
          highlight = 0;
        }

        // Rotate u,v about image center
        var cosOfRot = cos(rot);
        var sinOfRot = sin(rot);
        u -= widthH;
        v -= heightH;
        temp = u*cosOfRot - v*sinOfRot;
        v = v*cosOfRot + u*sinOfRot;
        u = temp;

        // Scale result (still about center) and translate back
        // Wrap u,v at texture edges
        // >> 0 is a cheap Math.floor
        u = ((u/scale >> 0) + widthH) % width;
        if (u < 0) u += width;
        v = ((v/scale >> 0) + heightH) % height;
        if (v < 0) v += height;

        // Copy (imageData self-camps values at 255)
        src = (v*width + u)*4;
        for (temp=0; temp<3; temp++) {
          bufferData[dest++] = imageData[src++] + highlight;
        }
        // Advance to next pixel
        dest++;
      }
    }

    // Draw buffer
    ctx.putImageData(buffer, 0,0);

    rAF(draw);
  };
  rAF(draw);
};
img.src = 'img/meanman.png';