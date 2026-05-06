import { DirectionalLight } from "three";

function createLights() {
  // 颜色color和强度intensity：强度为 8 的纯白光
  const light = new DirectionalLight("white", 8);

  //   灯光和目标的默认位置都是我们场景的中心(0,0,0)

  //调整灯光位置，使其位于场景(10,10,10)；现在灯光从(10,10,10)照向(0,0,0)。
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
