import React, { useEffect, Suspense, Component, lazy } from 'react';


import Html from "./common/Page/Html.js"
import Loading from "./common/Loading/Loading.js";

// import Contentful  from "./common/Page/Contentful/Contentful.js"




import Blog from "./common/Page/Blog.js"
import Dividers from "./common/Page/InsetDividers.js"
import SecondPage from "./common/Page/SecondPage.js"
import Count from "./common/Page/Count.js"
import {World} from "./common/Page/World/Earth.js"



import './App.scss';


const Lazy = lazy(() => new Promise(resolve => {
                // Do whatever you want, fetch, import, calc, just call resolve
                // with an object that has a "default" Component
                setTimeout(() => {
                    resolve({
                        default: () => <b> </b>});
                    }, 2500);
                }));

class App extends Component {


    render() {
        // const store = configureStore();
                
        return ( 
        
            <>
            <Html/>
            <Suspense fallback = { <Loading/> } >
                    <Lazy / >
                    {/* <Viewer/> */}
                    <World/>
            <div className = "App" >
                {/* <Blog/> */}

                <Count/>
                {/* <Dividers /> */}
                {/* <SecondPage/> */}
                {/* <Contentful/> */}
            </div>
            </Suspense>

            </>
            
        )
    }
}


export default App;