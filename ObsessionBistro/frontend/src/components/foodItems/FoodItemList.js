import React from 'react';
import "./FoodItemInCircle.css"
import FoodItemInCircle from "./FoodItemInCircle";

function FoodItemList() {
    return (
        <div className="food-item-body">

            <div className="all-the-foods">
                <FoodItemInCircle/>
            </div>
        </div>
    );
}

export default FoodItemList;