import React from 'react';

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles.scss';


// const { lazy, Suspense } = React;

// // // const Lazy = lazy(() => new Promise(resolve => {
// // //   setTimeout(() => {
// // //     resolve({ default: () => <Resource /> });
// // //   }, 4000);
// // // }));

// // const Lazy = lazy(() => new Promise(resolve => {
// // // Do whatever you want, fetch, import, calc, just call resolve
// // // with an object that has a "default" Component
// // setTimeout(() => { resolve({default: () => < b > </b> });
// // }, 2500);}));

export default class Loading extends React.Component {
  //other logic
  render() {
    return (

    <div className="Loading-container">
      <Loader
        type="Puff"
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />
    </div>

    
    );
  }
}