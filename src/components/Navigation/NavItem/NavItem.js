import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import {NavLink} from "react-router-dom";

const navItem = (props) => (
        <Aux>
            <li>
                <NavLink
                    className="navlink"
                    to={props.link}
                    exact
                >
                    {props.children}
                </NavLink>
            </li>
            <hr/>
        </Aux>
);

export default navItem;