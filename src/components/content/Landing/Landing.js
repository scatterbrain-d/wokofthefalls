import React, {Component} from "react";
import logoImage from "../../../assets/images/logo.jpg";

let slide1 = "slide showing";
let slide2 = "slide";
let slide3 = "slide";
let slide4 = "slide";

class Landing extends Component {
    
    state = {
        slideCount: 0
    }
    
    slideShowHandler = () => {
        slide1 = "slide";
        slide2 = "slide";
        slide3 = "slide";
        slide4 = "slide";
        switch(this.state.slideCount) {
            case 0: slide1 = "slide showing";
                break;
            case 1: slide2 = "slide showing";
                break;
            case 2: slide3 = "slide showing";
                break;
            case 3: slide4 = "slide showing";
                break;
            default: slide1 = "slide showing";
        }
        let newCount = (this.state.slideCount + 1) % 4;
        this.setState({slideCount:newCount});
    }
    
    componentWillMount = () => {
        setInterval(this.slideShowHandler, 4000);
    }
    
    render() {
        return (        
            <ul id="slider">
                <div id="logo">
                    <h1>Wok of the Falls</h1>
                    <img src={logoImage} alt="Wok of the Falls Logo"/>
                    <h1>440-235-6655</h1>
                </div>
                    <li className={slide1} id="slide1"></li>
                    <li className={slide2} id="slide2"></li>
                    <li className={slide3} id="slide3"></li>
                    <li className={slide4} id="slide4"></li>
            </ul>    
    
    );
}}

export default Landing;