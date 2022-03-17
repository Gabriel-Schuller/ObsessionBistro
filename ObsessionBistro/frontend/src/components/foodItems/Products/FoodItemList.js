import React from 'react';
import "./FoodItem.css"
import FoodItem from "./FoodItem";
function FoodItemList({products}) {
    return (
        <div className="second-row">
            {products.map(product =>(
                <FoodItem product={product} key={product.id}/>
            ))}
        </div>
    );
}

export default FoodItemList;