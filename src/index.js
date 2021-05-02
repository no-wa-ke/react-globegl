

import React  ,{ useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";



import Globe from "react-globe.gl";

import App from "./App";


const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.1) * 180,
    startLng: (Math.random() - 0.1) * 360,
    endLat: (Math.random() - 0.1) * 180,
    endLng: (Math.random() - 0.1) * 180,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 1)]]
  }));


const rootElement = document.getElementById("root");

const routes = (
    <App/>

  );


ReactDOM.render(
    <App/>,

    document.getElementById("root")
    );


