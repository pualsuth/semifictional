import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

loader.load( 'coffee_cup.gltf', function (gltf) {
    coffee = gltf.scene;
    coffee.scale.set(4, 4, 4);
    coffee.position.y = 4;
    scene.add(coffee);

})