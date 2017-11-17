import React from "react";
import Aux from "../../../hoc/Aux/Aux";

const navItem = (props) => (
        <Aux>
            <li>{props.title}</li>
            <hr/>
        </Aux>
);

export default navItem;