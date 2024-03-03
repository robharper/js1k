var x = c.getContext("2d");
var S = Math.sin;
var C = Math.cos;

var GCO = 'globalCompositeOperation';
var fillStyle = 'fillStyle';

var half_t, w, h, theta, r, distance, yp;

var draw = t => {
  x[GCO] = 'source-over';
  // Fade out the last frame with subtle breathing over time
  // Store t / 2 for later
  x[fillStyle] = `rgb(0,0,0,${.05*C(half_t=t/2)+.2}`;
  // Fill the canvas, store width and height
  x.fillRect(0,0,(w=480)*2,(h=270)*2);

  x[GCO] = 'lighter';
  for(i=999; i--;) {
    // Generate star polar coordinates
    // Radius proportional to i with a temporal "breathing" using Cos
    r = i + i*C(i+half_t)/8;
    // Every other star is given a theta creating 4 arms
    theta = i * (i%2 ? 1.567 : 7)
      // Random perturbation
      + S(i**4) * C(i/600) * 99 / i
      // Spin
      + half_t;
    i > 10 ? (
      // Stars
      x.fillRect(
        C(theta) * r / (distance = 2 - ((yp=S(theta) * r)/999)) + w,
        yp*.7 /distance + h,
        3, 3,
        x[fillStyle] = `hsl(${C(i)*50} ${i/9}%${(999-i)/5}%`
      )
    ) : (
      // Galaxy center - overlapping yellowish circles
      x.fill(x.arc(
        x.beginPath(x[fillStyle] = `hsl(${i*2+30} 20%,50%,0.07`) ||
        w + C(i+half_t)*6,
        h + S(i)*3,
        i*i/2, 0, 6.3
      ))
    )
  }
}

var loop;
(loop = () => {
  requestAnimationFrame(loop);
  draw((new Date()) / 1000);
})();
