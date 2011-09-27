// Throw-back to Future Crew's Second Reality "Oscillating Cirles + Plasma"
// Uses WebGL fragment shaders to compute pixel values
// Ugly code hacked to get < 1k (1kJS)
// 
// Wrap in a function closure that we'll strip out after minification
(function(){
// Declare all the vars used below so closure will allow them to be renamed (strip out later)
var prop,canvas,gl,shader,z,ab,vpa,timeUniform,vertices,vs,w,h,t,p,shaders,s;

// Add two letter aliases to all gl functions to save chars
for(prop in gl = (canvas = document.body.children[0]).getContext("experimental-webgl"))
  gl[prop[0]+(prop[6]||'')]=gl[prop];

// Set the canvas size (800 px)
s=canvas.width=canvas.height=800;

t=0;
p = gl.cP(); //createProgram 

// Create definitions for the shader programs (vertex + fragment)
shaders = [
    {   c:"attribute vec3 l;varying vec2 p;void main(void){gl_Position=vec4(l, 1.0);p=vec2(l);}",
        t:gl.VERTEX_SHADER
    },
    {   c:"precision highp float;\
uniform float t;\
varying vec2 p;\
void main(void){\
vec2 q=vec2(0.1*sin(0.75*t),0.4*cos(t*3.1));\
float i=6.7*sin(t*0.61+sin(t*0.21));\
vec2 c=vec2(0.1*sin(distance(p, vec2(0.1,0.3))*i+t*3.1), 0.1*sin((p.x+p.y)*i));\
float h=mod(float(int(mod(distance(q,p+c)*20.0,2.0))+2*int(mod(distance(-q,p+c)*20.0,2.0))),3.0)/2.0; \
gl_FragColor=vec4(h,h,h,1.0);\
}",
        t:gl.FN     // FRAGMENT_SHADER
    }];

// Create vertex and fragment shaders
for( shader in shaders) {
    vs = gl.cS(shaders[shader].t);      //createShader
    gl.sS(vs,shaders[shader].c);        //shaderSource
    gl.ce(vs);                          //compileShader
    gl.aS(p,vs);                        //attachShader
}

// activating the program
gl.lo(p);          //linkProgram
gl.ug(p);           //useProgram

// Get reference to uniform
timeUniform = gl.gf( p, "t" ); //getUniformLocation
vertices = [
     1,  1,  z=-.7,
    -1,  1,  z,
     1, -1,  z,
    -1, -1,  z
    ];
// Get reference to position attribute in vertex shader
vpa = gl.gr(p, "l");                    //getAttribLocation

// Create triangle strip defn
gl.eV(vpa);                             //enableVertexAttribArray
gl.bf(ab=gl.ARRAY_BUFFER, gl.cB());     //bindBuffer, createBuffer
gl.bD(ab, new Float32Array(vertices), gl.STATIC_DRAW);  //bufferData

// Animation function
setInterval(function() {
    // Set time
    gl.uniform1f( timeUniform, t=t+.02 );

    // Set viewport
    gl.vr(0, 0, s, s);                  //viewport

    // Draw
    gl.vA(vpa, 3, gl.FLOAT, false, 0, 0); //vertexAttribPointer
    gl.dr(gl.TRIANGLE_STRIP, 0, 4);     //drawArrays
}, 20);

// Strip:
}());