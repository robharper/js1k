var draw = t => {
  c.width |= 0;
  W = 120
  H = 70
  P = 0;

  // x_pattern = [
  //   0,
  //   0b000111110011111100111110000000,
  //   0b000000100110000001010101000000,
  //   0b000000100011110001001001000000,
  //   0b000101100000011001100011000000,
  //   0b000111001111110000111110000000,
  //   0
  // ];
  x_pattern = [
    0b00001111100000100000011100000000,
    0b00001110000001110000011100000000,
    0b00001100000011100000011100000000,
    0b00001000000111000000011100000000,
  ]
  //y_pattern = 0b00000011111110001111000100000000;

  posX = 16 + 5*C(t);
  posY = 5 + 2*S(t*1.7);
  posZ = -10 + 3*t;

  for (i=8400; i--;) {
    xp = i % W;
    yp = i / W | 0;

    // Calculate ray
    // Camera position: 0,0,0
    // Camera facing 0,0,1 (positive z into screen)
    rayX = 2*xp/W - 1;
    rayY = 2*yp/H - 1;
    rayZ = 1;

    deltaDistX = Math.abs(1 / rayX);
    deltaDistY = Math.abs(1 / rayY);
    deltaDistZ = 1;

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

    while (sideDistZ < 20 && mapX > 0 && mapX < 32 && mapY > 0 && mapY < 10) {
      if (sideDistX < sideDistZ && sideDistX < sideDistY) {
        dist = sideDistX;
        sideDistX += deltaDistX;
        mapX += stepX;
      } else if (sideDistY < sideDistZ) {
        dist = sideDistY;
        sideDistY += deltaDistY;
        mapY += stepY;
      } else {
        dist = sideDistZ;
        sideDistZ += 1;
        mapZ += 1;
      }
      if (mapZ-posZ < 2) continue;
      //Check if ray has hit a wall
      if ((x_pattern[mapY/2|0] >> 32-mapX) & 1 && mapZ % 7 < 2 || mapY === 10) {
        x.fillRect(xp*16, yp*16, 18-dist, 18-dist);
        break;
      }
    }
  }
}
