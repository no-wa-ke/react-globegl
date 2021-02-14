import React from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = < FontAwesomeIcon icon = { faCoffee }
/>


// import {useAuth0} from '../../utilities/auth-spa';

// import x from '../../ASSETS/logo.svg';
import './styles.scss';


export default function LandingPage() {
    //   const { loginWithRedirect } = useAuth0();
    return ( <
        >
        <
        div className = "Login-container" >
        <
        section className = "left-side" >
        <
        h1 >
        Privacy < em > Blog < /em> <
        /h1> <
        FontAwesomeIcon icon = {
            ["fal", "coffee"] }
        />


        {
            /* 
                      <div className="paragraphs">
                        <span role="img" aria-label="handshake">
                          🤝
                        </span>
                        <h2>
                          Join and start creating projects and collaborating with teams!
                        </h2>

                        <span role="img" aria-label="briefcase">
                          💼
                        </span>
                        <h2>
                          House your case studies, deliverables, assets, links, and design
                          files all in one place!
                        </h2>

                        <span role="img" aria-label="megaphone" className="megaphone">
                          📢
                        </span>
                        <h2>
                          Give and recieve feedback with ease. No more worrying about your
                          feedback getting lost in Slack messages!
                        </h2>
                      </div> */
        }


        <
        /section>

        <
        /div> <
        />
    );
}