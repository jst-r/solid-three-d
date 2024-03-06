import * as THREE from "three";
import perlin, { material, options } from "./perlin/index.ts";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from "three/examples/jsm/libs/stats.module.js";

export class Example {
    camera: THREE.PerspectiveCamera;
    geometry: THREE.BoxGeometry;
    material: THREE.MeshNormalMaterial;
    mesh: THREE.Mesh<any, THREE.MeshNormalMaterial, THREE.Object3DEventMap>;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    stats: Stats;
    start: number;

    constructor(container: HTMLElement) {
        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 20;

        this.geometry = new THREE.BoxGeometry(200, 200, 200);
        this.material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.scene = new THREE.Scene();

        // this.scene.add(this.mesh);
        this.scene.add(perlin);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.stats = new Stats();
        container.appendChild(this.stats.dom);
        container.appendChild(this.renderer.domElement);
        container.style.cssText = "margin: 0; overflow: hidden";
        window.addEventListener("resize", this.onWindowResize, false);

        this.start = Date.now();
        this.animate();
    }

    animate = () => {
        this.stats.begin();

        this.animatePerlin();
        this.animateMaterial();

        this.camera.lookAt(this.scene.position);
        this.controls && this.controls.update();
        this.renderer.render(this.scene, this.camera);

        this.stats.end();

        requestAnimationFrame(this.animate);
    };

    animatePerlin = () => {
        const { sinVel, ampVel } = options.spin;
        const performance = Date.now() * 0.003;
        // perlin.rotation.x +=
        //     (Math.sin(performance * sinVel) * ampVel * Math.PI) / 180;
        // perlin.rotation.y += options.perlin.vel;
    };

    animateMaterial = () => {
        material.uniforms["time"].value =
            options.perlin.speed * (Date.now() - this.start);
        material.uniforms["pointscale"].value = options.perlin.pointScale;
        material.uniforms["decay"].value = options.perlin.decay;
        material.uniforms["complex"].value = options.perlin.complex;
        material.uniforms["waves"].value = options.perlin.waves;
        material.uniforms["eqcolor"].value = options.perlin.eqcolor;
        material.uniforms["fragment"].value = options.perlin.fragment;
        material.uniforms["redhell"].value = options.perlin.redhell;
    };

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
}