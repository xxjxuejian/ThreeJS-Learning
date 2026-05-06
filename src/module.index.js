// 模块化方案的入口
import { World } from "./World/world.js";
import "./style.css";

function main() {
  // Get a reference to the container element
  const container = document.getElementById("scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

main();
