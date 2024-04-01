var draw = t => {
  c.width |= 0;
  W = 240
  H = 135
  P = 0;

  x_pattern = 13256 * (1.1 + S(t/3|0)) % (1<<16);
  y_pattern = 972 * (1.7 + S(t/2|0)) % (1<<16);

  for (i=4e4; i--;) {
    xp = i % W;
    yp = i / W | 0;

    // Start at the front, work back, stop when we hit a solid
    for (depth=8; --depth;) {
      d = (depth / 16) + .5;
      xd = ((xp - W/2) / d + W/2 + t*40) % W;
      yd = ((yp - H/2) / d + H/2 + t*20) % H;
      // Screen to world
      xw = 1 << xd / 15;
      yw = 1 << yd / 15;
      if (xw & x_pattern && yw & y_pattern) {
        // Hit solid
        x.fillRect(
          xp*8+ 1/(yp-(30*(C(t) + S(1.7*t) - 3*t)%H) - H)*H,
          yp*8,
          depth*2,
          depth,
          );
        P += depth;
        break;
      }
    }
    // Add noise where no solid drawn
    depth || C(yp+t*100) > 0.9 &&
      x.fillRect(xp*8, yp*8, 8*S(xp*yp), 1, P+=1);
  }
}

// K = W/2 + t*40;
// C = W/2;
// D = "xd" value calulated by finding depth zero and offsetting by direction of focal point;

// d = (xp - C) / (D-K);