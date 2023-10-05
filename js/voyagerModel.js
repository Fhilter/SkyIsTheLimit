
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

THREE.Cache.enabled = true;

const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load('assets/voyager.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();