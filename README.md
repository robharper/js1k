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

<img width="797" alt="image" src="https://user-images.githubusercontent.com/900789/233708529-c9415c33-f605-4e88-a948-8127fd062d78.png">

**Size:** 1019 bytes


### Build
(To run UglifyJS2 on the src)
```
npm install
grunt
```

### Notes
Built files can be further hand minified.
