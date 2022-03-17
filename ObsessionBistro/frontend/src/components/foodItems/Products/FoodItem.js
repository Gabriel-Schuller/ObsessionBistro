import React from 'react';
import "./FoodItem.css"

function FoodItem({product}) {
    return (

            <div className="food-one">
                <div className="name">
                    <p>{product.name}</p>
                    <p>Incearca acum!</p>
                </div>
                <div className="price">
                    <button>{product.price}<sup>00</sup></button>
                </div>
            </div>
    );
}

export default FoodItem;