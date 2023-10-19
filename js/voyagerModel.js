const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// THREE.Cache.enabled = true;

// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create a renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Load the 3D model
// const loader = new THREE.GLTFLoader();
// loader.load('assets/voyager.glb', (gltf) => {
//     const model = gltf.scene;
//     scene.add(model);
// });

// // Animation loop
// const animate = () => {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// };

// animate();
// Handles loading the events for <model-viewer>'s slotted progress bar