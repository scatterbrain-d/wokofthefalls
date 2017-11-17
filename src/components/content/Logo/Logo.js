import React from "react";
import logoImage from "../../../assets/images/logo.jpg";

const logo = () => (
                <ul id="slider">
                    <div id="logo">
                        <h1>Wok of the Falls</h1>
                        <img src={logoImage} alt="Wok of the Falls Logo"/>
                        <h1>440-235-6655</h1>
                    </div>
                    <li className="slide showing" id="slide1"></li>
                    <li className="slide" id="slide2"></li>
                    <li className="slide" id="slide3"></li>
                    <li className="slide" id="slide4"></li>
                </ul>    
    
);

export default logo;