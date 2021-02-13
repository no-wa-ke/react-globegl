
import React from "react";
import ReactDOM from "react-dom";
import { PushSpinner } from "react-spinners-kit";
import './styles.scss';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
// const rootElement = document.getElementById("root")
    render() {
        const { loading } = this.state;
        
        return (

            <div className="Loading-container">
            <PushSpinner
                size={30}
                color="#ffffff"
                loading="3000"
            />
            </div>
        );
    }
}


export default Download;