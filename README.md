js1k
====

Having a little fun with JavaScript in spirit of the js1k (www.js1k.com) competition and the demo scene from the early 90s.  The code isn't pretty but it's fun.

## Rotozoom

 > Rotozoom and lens refraction effect from Future Crew's Second Reality

 http://robharper.ca/js1k/lens.html

<img width="633" alt="image" src="https://user-images.githubusercontent.com/900789/232638459-dc642730-d15c-459b-aa28-b6b1a42360f8.png">

This may cheat a bit because it uses an image but the rest of the effect is entirely JS first principals (canvas). I've done very little optimization or shrinking. It would be much much faster to do this with WebGL shaders but it's more fun to pixel-twiddle like in the Turbo PASCAL days.

**Size:** 1023 bytes

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

# Not 1k
Sometimes it's fun to just play with effects and not try to squeeze them down. So:
## Time Warp

> Colorful warp effect inspired by http://roy.red/posts/slitscan/

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

