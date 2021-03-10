import React, { useEffect, Suspense, Component, lazy } from 'react';
import "./styles.css";

import Html from "./common/Page/Html.js"
import Loading from "./common/Loading/Loading.js";
import LandingPage from "./common/Page/index.js";

import Viewer from "./common/World/Viewer.js"
import Dividers from "./common/Page/InsetDividers.js"
import SecondPage from "./common/Page/SecondPage.js"
import Count from "./common/Page/Count.js"

import './App.scss';


const Lazy = lazy(() => new Promise(resolve => {
                // Do whatever you want, fetch, import, calc, just call resolve
                // with an object that has a "default" Component
                setTimeout(() => {
                    resolve({
                        default: () => < b > < /b> });
                    }, 2500);
                }));

            // 1
class App extends Component {


    render() {
        // const store = configureStore();
                
        return ( 
        
            <>
            <Html/>
            <Suspense fallback = { <Loading/> } >
                    <Lazy / >
                     <Viewer/>             */}
            <div className = "App" >
                <LandingPage / >
                <Count/>
                <Dividers />
                <SecondPage/>
                
            </div>
            </Suspense>

            </>
            
        )
    }
}


export default App;