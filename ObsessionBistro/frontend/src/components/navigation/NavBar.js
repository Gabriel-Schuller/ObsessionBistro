import React from 'react';
import CartButton from "../utils/CartButton";
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css"

function NavBar() {
    return (
        <div className="navigation-container">
            <div className="navigation-content">
                <img src="/assets/LOGO.png" className="logo" alt="OLALA"></img>

                <div className="menu">
                    <ListGroup horizontal>
                        <ListGroup.Item className="item" as={NavLink} to="/">HOME</ListGroup.Item>
                        <ListGroup.Item className="item" as={NavLink} to="/meniu">MENIU</ListGroup.Item>
                        <ListGroup.Item className="item" as={NavLink} to="/oferte">OFERTE</ListGroup.Item>
                        <ListGroup.Item className="item" as={NavLink} to="/contact">CONTACT</ListGroup.Item>
                    </ListGroup>
                </div>
                <CartButton/>
            </div>
        </div>


    );
}

export default NavBar;