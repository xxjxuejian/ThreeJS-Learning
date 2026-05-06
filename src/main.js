import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const container = document.getElementById("scene-container");
// 创建场景
const scene = new THREE.Scene();

// 初始化相机
// Create a camera
const fov = 35; // 视野：相机的视野有多宽，以度为单位。
const aspect = container.clientWidth / container.clientHeight; // 纵横比：场景的宽度与高度的比率。
const near = 0.1; // the near clipping plane：近剪裁平面：任何比这更靠近相机的东西都是不可见的。
const far = 100; // the far clipping plane：远剪裁平面：任何比这更远离相机的东西都是不可见的。

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); //透视投影：匹配我们的眼睛看待世界的方式
camera.position.set(0, 0, 10); // 设置相机位置
camera.lookAt(0, 0, 0); // 设置相机朝向

// 创建一个简单的立方体
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial(); // 默认的白色材质
const cube = new THREE.Mesh(geometry, material); // 网格对象由几何体和材质组成
scene.add(cube);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio); // 这是防止 HiDPI 显示器模糊所必需的
renderer.setSize(container.clientWidth, container.clientHeight);
// renderer.domElement: 将我们的场景绘制到一个<canvas>元素中，自动创建并存储在renderer.domElement
// 我们需要把它添加到我们的HTML中，这样我们才能看到它
container.append(renderer.domElement);
renderer.render(scene, camera); //执行渲染操作
