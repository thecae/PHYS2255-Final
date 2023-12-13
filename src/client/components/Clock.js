import * as THREE from "three";

const createHand = (length, width, color) => {
  const handShape = new THREE.Shape();
  const radius = width / 2;
  handShape.moveTo(0, -radius);
  handShape.lineTo(0, length - radius);
  handShape.absarc(radius, length - radius, radius, Math.PI, 0, true);
  handShape.lineTo(2 * radius, -radius);
  handShape.absarc(radius, -radius, radius, 0, Math.PI, true);

  const geometry = new THREE.ShapeGeometry(handShape);
  const material = new THREE.MeshBasicMaterial({ color });
  const hand = new THREE.Mesh(geometry, material);

  hand.geometry.translate(0, radius, 0);
  return hand;
};

const createClock = () => {
  const clock = new THREE.Group();

  // clock face
  const geometry = new THREE.CircleGeometry(2, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const face = new THREE.Mesh(geometry, material);
  clock.add(face);

  // hands
  const second = createHand(1.8, 0.1, 0xff0000);
  clock.add(second);

  // small circle at the base
  const centerGeometry = new THREE.CircleGeometry(0.1, 32);
  const centerMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const center = new THREE.Mesh(centerGeometry, centerMaterial);
  clock.add(center);

  // set initial rotation
  const time = new Date();
  second.rotation.z = -(time.getSeconds() / 60) * Math.PI * 2;

  const xOffset = window.innerWidth / 175;
  const yOffset = -(window.innerHeight - 44) / 190;
  clock.position.set(xOffset, yOffset, 0);

  return {
    clock: clock,
    second: second,
  };
};

export default createClock;
