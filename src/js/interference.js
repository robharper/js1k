var i, xi, yi, xc, yc, layer, w;

var draw = t => {
  c.width |= 0;
  W = 240
  H = 135
  for (i=4e4; i--;) {
    xc = (xi = i % W) + t*12;
    yc = (yi = i / W | 0) - t*9;
    for (layer = 6; layer-- > 1 && ((xc >> layer) ^ (yc >> layer)) & 1; xc += t) yc += t
    x.fillRect(
      // X-offset wave
      xi*8 + 1/(yi-(30*(C(t) + S(1.7*t) - 3*t)%H) - H)*H,
      yi*8,
      w = (9-layer),
      w
      );
  }
}