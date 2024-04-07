js1k
====

Having a little fun with JavaScript in spirit of the js1k (www.js1k.com) competition and the demo scene from the early 90s.  The code isn't pretty but it's fun.

## Rotozoom

 > Rotozoom and lens refraction effect from Future Crew's Second Reality

 http://robharper.ca/js1k/lens.html

<img width="633" alt="image" src="https://user-images.githubusercontent.com/900789/232638459-dc642730-d15c-459b-aa28-b6b1a42360f8.png">

This may cheat a bit because it uses an image but the rest of the effect is entirely JS first principals (canvas). I've done very little optimization or shrinking. It would be much much faster to do this with WebGL shaders but it's more fun to pixel-twiddle like in the Turbo PASCAL days.

**Size:** 920 bytes

**Note:** This is slightly cheating since the size of the image is not included

## Shadebobs

 > Shadebobs effect from Future Crew's Unreal

 http://robharper.ca/js1k/shadebobs.html


<img width="645" alt="image" src="https://user-images.githubusercontent.com/900789/232638533-c693e974-a4f6-418c-bf1c-6bc78d126eb7.png">


**Size:** 311 bytes


## Hypno

 > Throw-back to Future Crew's Second Reality "Oscillating Cirles + Plasma". Uses WebGL fragment shaders to compute pixel values

http://www.robharper.ca/js1k/hypno.html

<img width="797" alt="image" src="https://user-images.githubusercontent.com/900789/233708529-c9415c33-f605-4e88-a948-8127fd062d78.png">

**Size:** 1019 bytes

## Worm Hole Train

> Draws a "mine cart through a wormhole" type of effect using a neat approach to rendering movement

http://www.robharper.ca/js1k/worm.html

<img width="939" alt="image" src="https://github.com/robharper/js1k/assets/900789/577734e2-1ae8-4e35-b4e0-34a420c888fb">

**Size:** 465 bytes

**Note:** This demo uses the [Dwitter](https://www.dwitter.net/) tiny code framework (provides a few helper functions and handles calling your render function at 60 FPS)

## Galaxy

> A spinning 2-arm spiral galaxy

http://www.robharper.ca/js1k/galaxy.html

<img width="987" alt="image" src="https://github.com/robharper/js1k/assets/900789/c2625525-8d93-4635-aa3e-5092c50dec0c">

**Size:** 542 bytes

## Chaos Game

> Draws a series of iterations of the [chaos game](https://en.wikipedia.org/wiki/Chaos_game) within a heptagon with varying factor values over time

http://www.robharper.ca/js1k/invariant.html

<img width="629" alt="image" src="https://github.com/robharper/js1k/assets/900789/bcd54344-21e1-4f69-b240-c77619514047">

**Size:** 387 bytes

## Joy

> A play on the Joy Division album art for Unknown Pleasures

http://www.robharper.ca/js1k/plasma.html

<img width="486" alt="image" src="https://github.com/robharper/js1k/assets/900789/570fc9e5-9c1f-4227-8b9b-02e615a067c1">

**Size:** 397 bytes

## BitScape

> Basic 3d ray casting, flying over a city scape, pixelated

http://www.robharper.ca/js1k/bitscape.html

<img width="956" alt="image" src="https://github.com/robharper/js1k/assets/900789/fc0c438f-d5d4-4b21-a990-7e3d4711c14f">

**Size**: 351 bytes

## Interference

> Black and white geometric patterns through varying the size of rectangle drawn at relatively static locations

http://www.robharper.ca/js1k/interference.html

<img width="954" alt="image" src="https://github.com/robharper/js1k/assets/900789/98419467-fc5e-4c70-8c31-d02887f79989">

**Size:** 170 bytes


## Plasma

> Draws an old-school demo plasma effect - a true "Dweet": 140 bytes

http://www.robharper.ca/js1k/plasma.html

<img width="940" alt="image" src="https://github.com/robharper/js1k/assets/900789/8cafabd0-7931-4a6d-a815-4c96b6268214">

**Size:** 140 bytes

# Not 1k
Sometimes it's fun to just play with effects and not try to squeeze them down. So:

## Time Warp

> Colorful warp effect inspired by http://roy.red/posts/slitscan/ using voronoi noise and GL shaders

http://www.robharper.ca/js1k/tunnel.html

<img width="911" alt="image" src="https://user-images.githubusercontent.com/900789/234439036-05c32804-81d9-4654-bcd0-5198c05c6ad8.png">

**Size:** Whatever

# Development
```
npm install

# Build first-pass minified js
npm run build-min

# ...edit files in build/min by hand

# Second minification pass + inlining in HTML, copying to /docs
npm run build-dist
```

Hand edits include:
- Removing `var` definitions

## RegPack
The [RegPack](https://github.com/Siorki/RegPack) compressor can be applied to the JS by enabling via flag
in `scripts/dist.js`. It can significantly shrink JS but makes it nearly unreadable.

## Running
To run the uncrushed code, run:
```
npm run serve
```

After building, serve the crushed and inlined can be run via:
```
npm run serve-dist
```

