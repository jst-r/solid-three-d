varying float qnoise;
varying vec3 v_color; // Varying variable to pass color to fragment shader

uniform float time;
uniform bool redhell;

void main() {
    float r, g, b;

    if(!redhell == true) {
        r = cos(qnoise + 0.5);
        g = cos(qnoise - 0.5);
        b = 0.0;
    } else {
        r = cos(qnoise + 0.5);
        g = cos(qnoise - 0.5);
        b = abs(qnoise);
    }
    gl_FragColor = vec4(v_color, 1.0);
}