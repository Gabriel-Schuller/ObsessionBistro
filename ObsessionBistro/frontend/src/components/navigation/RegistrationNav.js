import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";


function RegistrationNav({title}) {
    let route=`/${title}`


    return (
        <div className="menu">
                        <div className="ul-navbar">
                            <div className="li-navbar">
                                <NavLink className="a-navbar" to={route}>{title}</NavLink>
                            </div>
                        </div>
                    </div>
    );
}

export default RegistrationNav;