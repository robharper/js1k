var x = c.getContext("2d");
var S = Math.sin;
var C = Math.cos;

var W, F, i, y, ofs, j;

var draw = t => {
  c.width |= 0;
  x.lineWidth = 3;
  x.strokeStyle = '#fff';
  for(i=0;i<(s=70);i++,x.fill(x.lineTo(s+W, y+F, x.lineTo(s, y+F, x.stroke()))))
    for (y = i*6 + (F=50),x.moveTo(s+(W=300),y,x.beginPath()),ofs=0,j=99; j--;)
      x.lineTo(
        s + W * j/99,
        y - Math.exp(-1 * ((j-F)/21)**2)*(ofs += C(j*j*(i+t/1e3) + 1)*S(t/8+(i+1)+j) * 3),
      )
}

var loop;
(loop = () => {
  requestAnimationFrame(loop);
  draw((new Date()) / 1000);
})();
