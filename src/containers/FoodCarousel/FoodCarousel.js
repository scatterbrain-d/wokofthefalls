import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import food1 from "../../assets/images/food1.jpg";
import food2 from "../../assets/images/food2.jpg";
import food3 from "../../assets/images/food3.jpg";
import food4 from "../../assets/images/food4.jpg";

class FoodCarousel extends Component {
    render() {
        return (
            <Carousel 
                autoPlay 
                infiniteLoop 
                showArrows="false"
                showIndicators="false"
                showStatus="false"
            >
                <div>
                    <img src={food1} alt="food"/>
                </div>
                <div>
                    <img src={food2} alt="food"/>
                </div>
                <div>
                    <img src={food3} alt="food"/>
                </div>
                <div>
                    <img src={food4} alt="food"/>
                </div>
            </Carousel>
        );
    }
}

export default FoodCarousel;