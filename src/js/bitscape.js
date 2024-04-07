var W, H, P, posX, posY, posZ, xp, yp, rayX, rayY, mapX, mapY, mapZ, deltaDistX, deltaDistY, sideDistX, sideDistY, sideDistZ, side, RND, SQUARE;

var draw = t => {
  c.width |= 0;
  W = 120
  H = 70
  P = 0;

  posX = 13 + 5*C(t);
  posY = 3 + 2*S(t*1.7);
  posZ = 3 + 3*t;

  for (i=9e3; i--;) {
    xp = i % W;
    yp = i / W | 0;

    rayX = 2*xp/W;
    rayY = 2*yp/H;

    mapX = posX|0;
    mapY = posY|0;
    mapZ = posZ|0;

    deltaDistX = 1 / rayX;
    deltaDistY = 1 / rayY;
    sideDistX = (mapX-posX+1) * deltaDistX;
    sideDistY = (mapY-posY+1) * deltaDistY;
    sideDistZ = (mapZ-posZ+1);

    while (sideDistZ < 18) {
      side = 0;
      if (sideDistX < sideDistZ && sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += 1;
      } else if (sideDistY < sideDistZ) {
        sideDistY += deltaDistY;
        mapY += 1;
      } else {
        sideDistZ += 1;
        mapZ += 1;
        side = 1;
      }
      if (C(RND = mapX*mapZ) > 0.5 && mapY > 10 - 8*S(RND) || mapY === 12) {
        x.fillStyle = mapY === 12 ? '#1a1' : side ? '#000' : '#666';
        x.fillRect(xp*16, yp*16, SQUARE=18-sideDistZ, SQUARE);
        break;
      }
    }
  }
}
