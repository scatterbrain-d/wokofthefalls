import React from "react";
import NavItem from "../NavItem/NavItem.js";
import Aux from "../../../hoc/Aux/Aux";
import Details from "../../content/Details/Details";

const navbar = () => {
    
    return (
        <Aux>    
            <nav className="navbar">
                <ul>
                    <NavItem
                        title="Menu"
                    />
                    <NavItem
                        title="Location"
                    />
                    <NavItem
                        title="Coupons"
                    />
                    <NavItem
                        title="Contact"
                    />
                </ul>
                <Details/>
            </nav>
        </Aux>
    );
};

export default navbar;