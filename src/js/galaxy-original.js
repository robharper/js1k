var NUM_POINTS = 999;
var x = c.getContext("2d");
var S = Math.sin;
var C = Math.cos;

R = seed => S(seed**4);

draw = t => {
  x.globalCompositeOperation = 'source-over';
  // Fade out the last frame with subtle breathing over time
  x.fillStyle = `rgb(0,0,0,${0.05*C(t)+0.2})`;
  x.fillRect(0,0,960,540);

  x.globalCompositeOperation = 'lighter';
  for(i=NUM_POINTS; i--;) {
    // Generate star polar coordinates
    // Radius proportional to i with a temporal "breathing" using Cos
    r = i * (C(t/2)/8+1);
    // Every other star is given a theta creating 2 arms based on approximate multiples of PI
    theta = (i % 2 ? i*.783 : i*18)+ R(i)*C(i/600)*100/i + t/2;
    // Convert to cartesian
    xp = C(theta) * r;
    yp = S(theta) * r;
    // Distance of the star from the viewer [1,3]:
    distance = 2 - (yp/NUM_POINTS);

    if (i > 10) {
      // Stars
      x.fillStyle = `hsl(${C(i)*50} ${i/9}%${(NUM_POINTS-i)/5}%`;
      x.fillRect(
        xp / distance + 480,
        yp*.7 /distance + 270,
        3, 3
      )
    } else {
      // Galaxy center - overlapping yellowish circles
      x.fillStyle = `hsl(${i*2+30} 20%,50%,0.07`;
      x.beginPath();
      x.arc(
        480 + C(i+t/2)*6,
        270 + S(i)*3,
        i*i/2, 0, 6.28
      );
      x.fill();
    }
  }
}

loop = () => {
  requestAnimationFrame(loop);
  draw((new Date()) / 1000);
};
loop();
