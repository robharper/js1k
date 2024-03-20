var x = c.getContext("2d");
var S = Math.sin;
var C = Math.cos;

// Create a heptagon
pts = [100, -100, -15, -140, -118, -75, -132, 45, -47, 131, 73, 118, 137, 16]

var r, interation, SIZE, xp = 0, yp = 0;
var draw = t => {
  iteration = (t/5)|0;
  r = 1.1 + 0.1*iteration;
  SIZE = (Math.log((t-5*iteration)+1)*10 | 0) / 6;
  x.fillStyle = `hsl(${t*80},100%,50%,0.05`;
  for (i=1e4; i--;) x.fillRect((xp = pts[ofs = (Math.random() * 7 | 0) * 2]*r + xp*(1-r))*SIZE + 480, (yp = pts[ofs+1]*r + yp*(1-r))*SIZE + 270, 1, 1);
}

var loop;
var frame = 0;
(loop = () => {
  requestAnimationFrame(loop);
  draw(frame++ / 60);
})();
