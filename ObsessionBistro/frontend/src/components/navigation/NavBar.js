import React from 'react';
import CartButton from "../utils/CartButton";
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css"

function NavBar() {
    return (
        <div className="navigation-body">
            <div className="navigation-container">
                <div className="navigation-content">
                    <img src="/assets/LOGO.png" className="logo" loading="lazy" alt="OLALA"></img>

                    <div className="menu">
                        <ul className="ul-navbar">
                            <li className="li-navbar"><NavLink className="a-navbar" to="/">HOME</NavLink></li>
                            <li className="li-navbar"><NavLink className="a-navbar" to="/meniu">MENIU</NavLink></li>
                            <li className="li-navbar"><NavLink className="a-navbar" to="/oferte">OFERTE</NavLink></li>
                            <li className="li-navbar"><NavLink className="a-navbar" to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <CartButton/>
                </div>
            </div>
        </div>


    );
}

export default NavBar;