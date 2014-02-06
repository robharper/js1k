js1k
====

Having a little fun with JavaScript in spirit of the js1k (www.js1k.com) competition and the demo scene from the early 90s.  The code isn't pretty but it's fun.

## Hypno

 > Throw-back to Future Crew's Second Reality "Oscillating Cirles + Plasma". Uses WebGL fragment shaders to compute pixel values
 
 http://robharper.ca/js1k/hypno.html

**Size:** 956 bytes

## Rotozoom

 > Rotozoom and lens refraction effect from Future Crew's Second Reality
 
 http://robharper.ca/js1k/lens.html

This may cheat a bit because it uses an image but the rest of the effect is entirely JS first principals (canvas). I've done very little optimization or shrinking. It would be much much faster to do this with WebGL shaders but it's more fun to pixel-twiddle like in the Turbo PASCAL days.

**Size:** 1023 bytes

## Shadebobs

 > Shadebobs effect from Future Crew's Unreal
 
 http://robharper.ca/js1k/shadebobs.html

**Size:** 311 bytes


### Build
(To run UglifyJS2 on the src)
```
npm install
grunt
```

### Notes
Built files can be further hand minified.
