import React, {Component} from "react";
import logoImage from "../../assets/images/logo.jpg";

class Landing extends Component {
    
    state = {
        showIndex: 0
    }
    
    nextSlide = () => {
        let currentSlide = this.state.showIndex;
        let [slide1, slide2, slide3] = "";
        const slides = [slide1, slide2, slide3];
        
        slides[currentSlide] += "showing";
        currentSlide = (this.state.showIndex + 1) % slides.length;
        this.setState({showIndex: currentSlide});
    }
    
    componentDidMount() {    
        setInterval(this.nextSlide(), 4000);
    }
    
    render() {
        
        let [slide1, slide2, slide3] = "";
        
        return (        
                <ul id="slider">
                    <div id="logo">
                        <h1>Wok of the Falls</h1>
                        <img src={logoImage} alt="Wok of the Falls Logo"/>
                        <h1>440-235-6655</h1>
                    </div>
                    <li className="slide showing" id="slide1"></li>
                    <li className="slide" id="slide2"></li>
                    <li className="slide" id="slide3"></li>
                </ul>    
    
        );
    }
}

export default Landing;