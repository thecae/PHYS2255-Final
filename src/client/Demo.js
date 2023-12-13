// Demo.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// components
import createClock from "./components/Clock.js";

const Three = () => {
  const mountRef = useRef(null);
  // clock storage
  let hh, mm, ss;

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
    const { clock, hour, minute, second } = createClock();
    hh = hour;
    mm = minute;
    ss = second;
    scene.add(clock);

    camera.position.z = 10;

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // clock rotation
      const time = new Date();
      hh.rotation.z = -((time.getHours() % 12) / 12) * Math.PI * 2;
      mm.rotation.z = -(time.getMinutes() / 60) * Math.PI * 2;
      ss.rotation.z = -(time.getSeconds() / 60) * Math.PI * 2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Three;
