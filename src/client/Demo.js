// Demo.js
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// components
import createClock from "./components/Clock.js";
import VelocitySlider from "./components/Slider.js";

const Three = () => {
  const mountRef = useRef(null);
  // clock storage
  let ss;
  // velocity storage
  const [velocity, setVelocity] = useState(0);

  const handleVelocity = (value) => {
    setVelocity(value);
    console.log("velocity", value);
  };

  useEffect(() => {
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1c1e26);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cube setup
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Clock setup
    const { clock, second } = createClock();
    ss = second;
    scene.add(clock);
    let lastTime = Date.now();

    camera.position.z = 10;

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // clock rotation
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      ss.rotation.z -= deltaTime * (2 * Math.PI / 60);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef}>
      <VelocitySlider onVelocityChange={handleVelocity} />
    </div>
  );
};

export default Three;
