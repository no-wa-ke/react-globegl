import React, { useState, useEffect, useRef } from "react";

import Globe from "react-globe.gl";


const N = 20;
const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 180,
    color: [
        ['red', 'red', 'red', 'red'][Math.round(Math.random() * 3)],
        ['red', 'red', 'red', 'red'][Math.round(Math.random() * 1)]
    ]
}));


export const World = () => {


    return (  <
        Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        arcsData={arcsData}
        arcColor={'color'}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 40000 + 50}
        />
    );
};