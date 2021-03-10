import React from 'react';
import { Helmet } from 'react-helmet';


class Html extends React.Component {
        render () {
                return (
                    <div className="application">
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>kido yoji</title>
                            <link rel="canonical" href="http://mysite.com/example" />
                        </Helmet>

                    </div>
                );
              }
};

 export default Html;

 //     <div className="application">
//         <Helmet>
//             <meta charSet="utf-8" />
//                 <title>kido yoji</title>
//                 <head>

//                 <meta
//                         name="description"
//                         content=""
//                 />
//                 {/* <link rel="icon" type="image/png" sizes="32x32" href="">           */}
//             </head>   
//         </Helmet>
//     </div>
