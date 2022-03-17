import React from 'react';
import {NavLink} from "react-router-dom";

function AboutUsAdvertizer() {
    return (
        <div className="breakfast">
                <NavLink className="a-navbar" to="/contact">
                    <p>About us</p>

                    <p>Come have a look</p>
                </NavLink>
            </div>
    );
}

export default AboutUsAdvertizer;