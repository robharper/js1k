/**
 * Dwitter framework: dwitter.net
 */
c = document.querySelector("#c");
c.width = 1920;
c.height = 1080;
S = Math.sin;
C = Math.cos;
T = Math.tan;
R = function(r,g,b,a) {
  a = a === undefined ? 1 : a;
  return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
};
x = c.getContext("2d");

var FPS = 60;
var frame = 0;
var frame_time, time;
var next_frame_time = 0;
(loop = () => {
  requestAnimationFrame(loop);
  frame_time = Date.now();
  if (frame_time >= next_frame_time-1.5) {
    time = frame / FPS;
    if (time * FPS | 0 == frame) {
      time += 0.000001;
    }
    draw(time);
    next_frame_time = Math.max(next_frame_time + 1000/FPS, frame_time);
    frame++;
  }
})();
