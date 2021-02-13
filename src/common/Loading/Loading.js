import React from 'react';

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles.scss';

export default class Loading extends React.Component {
  //other logic
  render() {
    return (

    <div className="Loading-container">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
    );
  }
}