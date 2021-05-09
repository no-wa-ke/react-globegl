import React, { useState, useEffect, useRef } from  "react";

// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// import { GUI } from 'three/examples/jsm/libs/datforgui.module.js';

  

import * as THREE from 'three';

  
  

import Globe from  "react-globe.gl";

  
  

const N = 20;

const arcsData = [...Array(N).keys()].map(() => ({

startLat: (Math.random() - 0.5) * 180,

startLng: (Math.random() - 0.5) * 360,

endLat: (Math.random() - 0.5) * 180,

endLng: (Math.random() - 0.5) * 180,

color: [

['red', 'red', 'red', 'red'][Math.round(Math.random() *  3)],

['red', 'red', 'red', 'red'][Math.round(Math.random() *  1)]

]

}));

  

const ambientLight = new THREE.AmbientLight( 0x222222)

  

const globeMaterial = new THREE.MeshPhongMaterial();

globeMaterial.bumpScale = 10;

new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {

globeMaterial.specularMap = texture;

globeMaterial.specular = new THREE.Color('grey');

globeMaterial.shininess = 15;

});

  
  

export const World = () => {

  

const fov = 45;

const aspect = 2; // the canvas default

const near = 0.1;

const far = 100;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// camera.position.set(0, 10, 20);

// const controls = new OrbitControls(camera, canvas);

// controls.target.set(0, 5, 0);

// controls.update();

  

const globeEl = useRef();

  

useEffect(() => {

// aim at continental US centroid

globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 3 });

globeEl.current.controls().autoRotate = true;

globeEl.current.controls().autoRotateSpeed = 0.5;

setTimeout(() => { // wait for scene to be populated (asynchronously)

const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');

directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect

});

  

}, []);

  

  

return ( <

Globe  ref = { globeEl }

// globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"

bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

// backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

globeMaterial={globeMaterial}

// Dot

arcsData={arcsData}

arcColor={'color'}

arcDashLength={() => Math.random()}

arcDashGap={() => Math.random()}

arcDashAnimateTime={() => Math.random() * 40000 + 50}

pointAltitude = { 0 }

pointRadius = { 0.04 }


width={window.innerWidth}
height={window.innerHeight}

/>

);

document.getElementById('globeViz')

};