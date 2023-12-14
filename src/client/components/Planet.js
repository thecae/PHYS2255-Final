import * as THREE from "three";

const createPlanet = (radius, colormap) => {
  const geometry = new THREE.SphereGeometry(radius, 32, 32);

  const texture = new THREE.TextureLoader().load(colormap);
  const material = new THREE.MeshBasicMaterial({ map: texture });

  const planet = new THREE.Mesh(geometry, material);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 0, 0);
  planet.add(light);

  return planet;
};

export default createPlanet;
