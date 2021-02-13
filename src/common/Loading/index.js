
import React, { lazy, Suspense } from "react";



const Lazy = lazy(() => new Promise(resolve => {
  // Do whatever you want, fetch, import, calc, just call resolve
  // with an object that has a "default" Component
  setTimeout(() => {
    resolve({ default: () => <b>Loaded</b> });
  }, 2500);
}));

function Load(){
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <Lazy/>
    </Suspense>
  )
}

export default Load;