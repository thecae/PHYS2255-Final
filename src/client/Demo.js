// Demo.js
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// components
import createPlanet from "./components/Planet.js";
import Clock from "./components/Clock.js";
import VelocitySlider from "./components/Slider.js";

const dilate = (v) => Math.sqrt(1 - Math.pow(v, 2));

const Three = () => {
  const mountRef = useRef(null);
  // velocity storage
  const [velocity, setVelocity] = useState(0);
  let factor = useRef(1);

  const handleVelocity = (value) => {
    factor.current = dilate(value);
    setVelocity(value);
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

    // Planet setup
    const distanceScale = 0.5;
    const sizeScale = 0.1;
    const mercury = createPlanet(0.38 * sizeScale, "./images/mercurymap.jpg");
    mercury.position.z = 0.39 * distanceScale;
    scene.add(mercury);
    const venus = createPlanet(0.95 * sizeScale, "./images/venusmap.jpg");
    venus.position.z = 0.72 * distanceScale;
    scene.add(venus);
    const earth = createPlanet(1 * sizeScale, "./images/earthmap.jpg");
    earth.position.z = distanceScale;
    scene.add(earth);
    const mars = createPlanet(0.53 * sizeScale, "./images/marsmap.jpg");
    mars.position.z = 1.52 * distanceScale;
    scene.add(mars);
    const jupiter = createPlanet(11.2 * sizeScale, "./images/jupitermap.jpg");
    jupiter.position.z = 5.2 * distanceScale;
    scene.add(jupiter);
    const saturn = createPlanet(9.45 * sizeScale, "./images/saturnmap.jpg");
    saturn.position.z = 9.58 * distanceScale;
    scene.add(saturn);
    const uranus = createPlanet(4 * sizeScale, "./images/uranusmap.jpg");
    uranus.position.z = 19.2 * distanceScale;
    scene.add(uranus);
    const neptune = createPlanet(3.88 * sizeScale, "./images/neptunemap.jpg");
    neptune.position.z = 30.05 * distanceScale;
    scene.add(neptune);
    const pluto = createPlanet(0.18 * sizeScale, "./images/plutomap.jpg");
    pluto.position.z = 39.48 * distanceScale;
    scene.add(pluto);

    // Camera setup
    camera.position.set(0, 0, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 1));

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // planet rotation
      mercury.rotation.y += ((2 * Math.PI) / 1407.6) * factor.current;
      venus.rotation.y += ((2 * Math.PI) / 5832.5) * factor.current;
      earth.rotation.y += ((2 * Math.PI) / 86400) * factor.current;
      mars.rotation.y += ((2 * Math.PI) / 88642.5) * factor.current;
      jupiter.rotation.y += ((2 * Math.PI) / 35730) * factor.current;
      saturn.rotation.y += ((2 * Math.PI) / 38760) * factor.current;
      uranus.rotation.y += ((2 * Math.PI) / 30600) * factor.current;
      neptune.rotation.y += ((2 * Math.PI) / 60225) * factor.current;
      pluto.rotation.y += ((2 * Math.PI) / 90465) * factor.current;

      // planet speed dilation
      mercury.scale.x = factor.current;
      venus.scale.x = factor.current;
      earth.scale.x = factor.current;
      mars.scale.x = factor.current;
      jupiter.scale.x = factor.current;
      saturn.scale.x = factor.current;
      uranus.scale.x = factor.current;
      neptune.scale.x = factor.current;
      pluto.scale.x = factor.current;

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
      <VelocitySlider
        currentVelocity={velocity}
        onVelocityChange={handleVelocity}
      />
      <Clock scale={factor.current} />
    </div>
  );
};

export default Three;
