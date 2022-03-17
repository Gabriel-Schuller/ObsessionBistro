import React from 'react';
import {NavLink} from "react-router-dom";

function MenuAdvertizer() {
    return (
        <div className="flavor">
            <NavLink className="a-navbar" to="/meniu">
                <p>Our MENU</p>
            </NavLink>
        </div>
    );
}

export default MenuAdvertizer;