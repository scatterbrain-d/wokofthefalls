import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Landing from "./components/content/Landing/Landing";
import Menu from "./components/content/Menu/Menu";
import Location from "./components/content/Location/Location";
import Coupons from "./components/content/Coupons/Coupons";
import Contact from "./components/content/Contact/Contact";
import Aux from "./hoc/Aux/Aux";
import Details from "./components/content/Details/Details";
import Spinner from "./components/UI/Spinner/Spinner";
import {Switch, Route} from "react-router-dom";

class App extends Component {
    
    state = {
        mounted: false
    }
    
    componentDidMount() {
        this.setState({mounted: true});
    }
    
    render() {
        
        let routes = <Spinner/>;
    
        if (this.state.mounted)
            routes = (
                        <Switch>
                            <Route path="/" exact component={Landing}/>
                            <Route path="/menu" component={Menu}/>
                            <Route path="/location" exact component={Location}/>
                            <Route path="/coupons" exact component={Coupons}/>
                            <Route path="/contact" exact component={Contact}/>
                        </Switch>
            
        );
    
        return (
            <Aux>
                <div className="container">
                    <Navbar/>
                    <div id="content">
                        {routes}    
                    </div>
                    <div className="details">
                        <Details/>
                    </div>
                </div>
                <Footer/>
            </Aux>
    );
  }
}

export default App;
