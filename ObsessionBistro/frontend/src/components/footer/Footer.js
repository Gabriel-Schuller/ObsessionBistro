import React from 'react';
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SiFacebook, SiInstagram} from "react-icons/si";

function Footer() {
    return (
        <div className="footer">
            <div className="navigation-content">
                <img src="/assets/LOGO.png" className="logo" alt="OLALA"></img>
                <div className="footer-menu">
                    <ListGroup horizontal>
                        <ListGroup.Item id="item" as={NavLink} to="">HOME</ListGroup.Item>
                        <ListGroup.Item id="item" as={NavLink} to="/meniu">MENIU</ListGroup.Item>
                        <ListGroup.Item id="item" as={NavLink} to="/oferte">OFERTE</ListGroup.Item>
                        <ListGroup.Item id="item" as={NavLink} to="/contact">CONTACT</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/ObsessionBistro"><SiFacebook size="1.5rem"/></a>
                    <div></div>
                    <a href="https://www.instagram.com/obsession.bistro/"><SiInstagram size="1.5rem"/></a>
                </div>
            </div>
            <div className="copyright">
                <p>Thank you for coming!</p>
            </div>
        </div>
    );
}

export default Footer;

