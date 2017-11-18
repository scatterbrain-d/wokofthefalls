import React from "react";
import NavItem from "../../Navigation/NavItem/NavItem";
import {Route} from "react-router-dom";
import frontMenu from "../../../assets/images/frontwokmenu2015.jpg";
import backMenu from "../../../assets/images/backwokmenu2015.jpg";

const menu = () => {
    

    
    return (
                    <div className="menu">
                        <NavItem navClass="menuButton" link="/menu/front" >Front</NavItem>
                        <NavItem navClass="menuButton" link="/menu/back" exact >Back</NavItem>
                        <Route path="/menu/front" exact render={() => <img src={frontMenu} alt="menu page 1"/>}/>
                        <Route path="/menu/back" exact render={() => <img src={backMenu} alt="menu page 2"/>}/>
                    </div>

    );
}
export default menu;