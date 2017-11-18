import React from "react";
import logoImage from "../../../assets/images/logo.jpg";
import FoodCarousel from "../../../containers/FoodCarousel/FoodCarousel";

const landing = () => {
    
        
        return (        
            <ul id="slider">
                <div id="logo">
                    <h1>Wok of the Falls</h1>
                    <img src={logoImage} alt="Wok of the Falls Logo"/>
                    <h1>440-235-6655</h1>
                </div>
                <FoodCarousel />
            </ul>    
    
    );
};

export default landing;