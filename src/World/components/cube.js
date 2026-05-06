import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";

function createCube() {
  // create a geometry；单位是 米
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  // const material = new MeshBasicMaterial();

  const material = new MeshStandardMaterial({ color: "green" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // 旋转立方体，非直视
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
