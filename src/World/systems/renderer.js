import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer();

  // 启用物理上正确的光照
  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };
