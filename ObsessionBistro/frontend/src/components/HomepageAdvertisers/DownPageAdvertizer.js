import React from 'react';
import MenuAdvertizer from "./MenuAdvertizer";
import AboutUsAdvertizer from "./AboutUsAdvertizer";
import "./Advertizer.css"

function DownPageAdvertizer() {
    return (
        <div className="third-row">
            <MenuAdvertizer/>
            <AboutUsAdvertizer/>
        </div>
    );
}

export default DownPageAdvertizer;