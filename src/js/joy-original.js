var x = c.getContext("2d");
var S = Math.sin;
var C = Math.cos;

var SPACE = 6;
var W = 300;
var F = 50;

var draw = t => {
  c.width |= 0;
  x.lineWidth = 3;
  x.strokeStyle = '#fff';
  for(i=0;i<70;i++) {
    y = i*SPACE + F;
    x.beginPath();
    x.moveTo(W+W, y);
    for (ofs=0,j=99; j--;) {
      // Use gaussian function to dampen the wave at the edges
      dampening = Math.exp(-1 * ((j-F)/21)**2);
      // Random path to create wave
      ofs += C(j*j*(i+t/1000) + 1)*S(t/8+(i+1)+j) * 3;
      x.lineTo(
        W + W * j/99,
        y - dampening*ofs,
      );
    }
    x.stroke();
    // Complete a 50px high box beneath to hide waves from above dipping below
    x.lineTo(W, y+F);
    x.lineTo(W+W, y+F);
    x.fill();
  }
}

var loop;
(loop = () => {
  requestAnimationFrame(loop);
  draw((new Date()) / 1000);
})();
