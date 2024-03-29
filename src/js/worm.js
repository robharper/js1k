var NUM_POINTS, percent, period, progress, cx, cy, theta, r, xp, yp, distance, rot, color, seeThrough, size, trackSpace;

draw = t => {
  // Clear the canvas
  c.width |=0 ;

  for(i=(NUM_POINTS = 999); i--;) {
    // [0.01, 1.01] (ie zero to one avoiding div by zero)
    percent = i / NUM_POINTS + 0.02;
    // How many seconds does it take for a rect to move from the beginning to the end?
    // / 6 (SPEED) / 60 (FPS)
    period = NUM_POINTS / 360;
    // How far along our tunnel (in distance from the beginning) are we?
    progress = percent*period + t;

    // Center point of the tunnel at this distance
    cx = S(progress + C(progress/3))**3 * 280 + 480;
    cy = C(progress/3)**3 * 150 + 270;

    // Current rect's position in polar coords

    // Place squares in a spiral around the center
    // Cool technique from https://frankforce.com/dissecting-a-dweet-8-shattered-tunnel/
    // t*60 at 60 FPS: theta of index N this frame = theta of index N-1 next frame
    // Since index N-1 is closer to the viewer, it gives the effect if the drawn rect
    // being moved closer to the camera. However, in reality, the rect of index N is
    // actually rotating around the spiral at a constant distance
    // FPS * SPEED = 60 * 6 = 360
    theta = i + t*360;
    // Tunnel is 30 pixels wide at the further point, adjusted for perspective
    r = 30 / percent;

    // Convert to cartesian
    xp = C(theta) * r;
    yp = S(theta) * r;

    // Rotate camera left/right
    distance = percent * 1000 + 2;
    rot = C(t/.7)*.2;
    // xp = xp*C(rot) + distance*S(rot);
    cx = cx*C(rot) + distance*S(rot);

    // Color: select a unique color based on progress spot in the tunnel
    color = (S(theta) * C(progress*3));
    x.fillStyle = `hsl(${color*50},80%,${(color*30 + 30)*(1-percent**4)}%`;

    seeThrough = (1 - S(progress/2)**14 + 0.1);

    // Size rects nearer viwer larger
    size = 15/percent * seeThrough;
    x.fillRect(
      xp + cx,
      yp + cy,
      size, size
    );

    // Draw tracks
    trackSpace = size/2/seeThrough
    x.fillStyle = `hsl(9,10%,${(1-percent)*60}%`;
    for (track=2; track--;) {
      x.fillRect(
        cx + (track ? -1 : 1)*trackSpace,
        cy + r*.6,
        .8/percent, 8
      )
    }
    if (((progress*80) | 0) % 10 == 0) {
      x.fillStyle = "#533";
      x.fillRect(
        cx - trackSpace,
        cy + r*.6,
        trackSpace*2, 8
      )
    }
  }
}
