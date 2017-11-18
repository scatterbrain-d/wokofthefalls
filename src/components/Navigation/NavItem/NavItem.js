import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import {NavLink} from "react-router-dom";

const navItem = (props) => (
        <Aux>
            <li>
                <NavLink
                    className={props.navClass}
                    to={props.link}
                    exact
                >
                    {props.children}
                </NavLink>
            </li>
        </Aux>
);

export default navItem;