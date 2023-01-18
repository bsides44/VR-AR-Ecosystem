import * as THREE from 'three';

export default function initializeScene(div) {

  // Setup renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  div.appendChild(renderer.domElement);
  console.log('Setup renderer')
  // Setup scene
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xbbbbbb));
  console.log('Setup scene')

  // Setup camera
  const camera = new THREE.PerspectiveCamera();
  camera.far = 10000;
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  console.log('Setup camera')

  return { scene, renderer, camera };
}
