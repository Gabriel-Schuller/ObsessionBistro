import React from 'react';
import {NavLink} from "react-router-dom";

function HomePageHeadRight() {
    return (
        <div className="find">
            <div className="order">
                <NavLink className="a-navbar" to="/oferte" style={{color: "#F9A609"}}>Comanda online</NavLink>
            </div>
        </div>
    );
}

export default HomePageHeadRight;