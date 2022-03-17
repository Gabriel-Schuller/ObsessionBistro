import React from 'react';
import HomePageHeadLeft from "./HomePageHeadLeft";
import HomePageHeadRight from "./HomePageHeadRight";
import "./HomePageHead.css";

function HomePageHead() {
    return (
        <div className="first-row">
            <HomePageHeadLeft/>
            <HomePageHeadRight/>
        </div>
    );
}

export default HomePageHead;