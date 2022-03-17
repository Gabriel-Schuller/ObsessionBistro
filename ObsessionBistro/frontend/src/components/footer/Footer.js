import React from 'react';
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SiFacebook, SiInstagram} from "react-icons/si";

function Footer() {
    return (
        <div className="footer">
            <div className="navigation-content">
                <img src="/assets/LOGO.png" className="logo" loading="lazy" alt="OLALA"></img>
                <div className="menu footer-menu">
                    <ul className="ul-navbar">
                            <li className="li-navbar"><NavLink className="a-navbar" to="/">HOME</NavLink></li>
                            <li className="li-navbar"><NavLink className="a-navbar" to="/meniu">MENIU</NavLink></li>
                            <li className="li-navbar"><NavLink className="a-navbar" to="/oferte">OFERTE</NavLink></li>
                            <li className="li-navbar"><NavLink className="a-navbar" to="/contact">CONTACT</NavLink></li>
                        </ul>
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

