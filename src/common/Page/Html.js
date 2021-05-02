import React from 'react';
import { Helmet } from 'react-helmet';


class Html extends React.Component {
        render () {
                return (
                    <div className="application">
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>K I D O Y O J I</title>
                            <link rel="icon" href="icon/favicon.ico" ></link>
                        </Helmet>
                    </div>
                );
              }
};

 export default Html;


