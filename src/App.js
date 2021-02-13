import React, { useEffect, Suspense ,Component,lazy } from 'react';
import "./styles.css";

import Loading from "./common/Loading/Loading.js";
import LandingPage from "./common/LandingPage/index.js";

import { World } from "./World";
import { Route } from 'react-router-dom';
import './App.scss';

const Lazy = lazy(() => new Promise(resolve => {
  // Do whatever you want, fetch, import, calc, just call resolve
  // with an object that has a "default" Component
  setTimeout(() => {
    resolve({ default: () => <b></b> });
  }, 2500);
}));

// 1
 class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }
  
  componentDidMount() {
    this.setState({isLoading: false})
  }  
  render() {
    // const store = configureStore();

      return ( 
        <Suspense fallback={<Loading/>}>
          <div className="App">
              <Lazy/>
              <LandingPage/>
              <World/>
          </div>
        </Suspense>
      )
     }
    }

 export default App;



