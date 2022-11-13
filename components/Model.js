import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import person from '../assets/compressed.glb';

export default function Model() {
  const mountRef = useRef(null);

  useEffect(() => {
    const SPIN_RATE = 0.003;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const ambientLight = new THREE.AmbientLight(0xffffff);
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath('node_modules/three/examples/js/libs/draco/');
    dracoLoader.preload();

    loader.setDRACOLoader(dracoLoader);

    loader.load(person, gltf => scene.add(gltf.scene));
    scene.add(ambientLight);

    renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 2;
    camera.position.y = 0.9;

    var animate = function () {
      requestAnimationFrame(animate);
      scene.rotation.y += SPIN_RATE;
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
}
