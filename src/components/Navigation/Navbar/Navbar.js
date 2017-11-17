import React from "react";
import NavItem from "../NavItem/NavItem.js";
import Aux from "../../../hoc/Aux/Aux";
import Details from "../../content/Details/Details";
import logoImage from "../../../assets/images/logo.jpg";

const navbar = () => {
    
    return (
        <Aux>    
            <nav className="navbar">
                <ul>
                    <NavItem 
                        link="/"><img src={logoImage} alt="logo"/>
                    </NavItem>
                    <NavItem link="/menu">Menu</NavItem>
                    <NavItem link="/location">Location</NavItem>
                    <NavItem link="/coupons">Coupons</NavItem>
                    <NavItem link="/contact">Contact</NavItem>
                </ul>
                <Details/>
            </nav>
        </Aux>
    );
};

export default navbar;