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
                    <hr/>
                    <NavItem 
                        link="/"
                        navClass="navlink"
                    >
                        <img src={logoImage} alt="logo"/> WF
                    </NavItem>
                    <hr/>
                    <NavItem navClass="navlink" link="/menu/front">Menu</NavItem>
                    <hr/>
                    <NavItem navClass="navlink" link="/location">Location</NavItem>
                    <hr/>
                    <NavItem navClass="navlink" link="/coupons">Coupons</NavItem>
                    <hr/>
                    <NavItem navClass="navlink" link="/contact">Contact</NavItem>
                    <hr/>
                </ul>
                <Details/>
            </nav>
        </Aux>
    );
};

export default navbar;