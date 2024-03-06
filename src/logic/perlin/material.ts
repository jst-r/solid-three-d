import { ShaderMaterial } from "three";
import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./fragment.glsl?raw";

export const material = new ShaderMaterial({
    wireframe: false,
    //fog: true,
    uniforms: {
        time: {


            value: 0.0
        },
        pointscale: {
            value: 0.0
        },
        decay: {
            value: 0.0
        },
        complex: {
            value: 0.0
        },
        waves: {
            value: 0.0
        },
        eqcolor: {
            value: 0.0
        },
        fragment: {
            value: true
        },
        redhell: {
            value: true
        }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});
