import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Logo from "./components/content/Logo/Logo";
import Aux from "./hoc/Aux/Aux";
import Details from "./components/content/Details/Details";

class App extends Component {
    render() {
        return (
            <Aux>
                <div className="container">
                    <Navbar/>
                    <div id="content">
                        <Logo/>
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
