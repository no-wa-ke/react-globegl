

import React  ,{ useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


import App from "./App";


const rootElement = document.getElementById("root");

const routes = (
    <App/>

  );


ReactDOM.render(
    <App/>,

    document.getElementById("root")
    );


