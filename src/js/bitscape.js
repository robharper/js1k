var draw = t => {
  c.width |= 0;
  W = 120
  H = 70
  P = 0;

  posX = 13 + 5*C(t);
  posY = 3 + 2*S(t*1.7);
  posZ = 3 + 3*t;

  for (i=8400; i--;) {
    xp = i % W;
    yp = i / W | 0;

    rayX = 2*xp/W - 1;
    rayY = 2*yp/H - 1 + 0.75;
    rayZ = 1;

    deltaDistX = Math.abs(1 / rayX);
    deltaDistY = Math.abs(1 / rayY);

    mapX = posX|0;
    mapY = posY|0;
    mapZ = posZ|0;

    if (rayX < 0) {
      stepX = -1;
      sideDistX = (posX - mapX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (mapX+1 - posX) * deltaDistX;
    }
    if (rayY < 0) {
      stepY = -1;
      sideDistY = (posY - mapY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (mapY + 1 - posY) * deltaDistY;
    }
    sideDistZ = (mapZ + 1 - posZ);

    while (sideDistZ < 20 && mapX > -5 && mapX < 32 && mapY > 0 && mapY < 13) {
      if (sideDistX < sideDistZ && sideDistX < sideDistY) {
        dist = sideDistX;
        sideDistX += deltaDistX;
        mapX += stepX;
        side = 0;
      } else if (sideDistY < sideDistZ) {
        dist = sideDistY;
        sideDistY += deltaDistY;
        mapY += stepY;
        side = 1;
      } else {
        dist = sideDistZ;
        sideDistZ += 1;
        mapZ += 1;
        side = 2;
      }
      if (C(mapX*mapZ) > 0.5 && mapY > 10 - 8*S(mapX*mapZ) || mapY === 12) {
        x.fillStyle = side == 2 ? '#000' : mapY === 12 ? '#1a1' : '#666';
        x.fillRect(xp*16, yp*16, 18-dist, 18-dist);
        break;
      }
    }
  }
}
