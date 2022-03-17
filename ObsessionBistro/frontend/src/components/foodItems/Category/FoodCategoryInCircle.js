import React from 'react';


function FoodCategoryInCircle(props) {
    return (

                <div className="clip-path-container">
                    <div className="description-holder">
                        <h4>{props.product.Title}</h4>
                        <p>{props.product.Description}</p>
                    </div>
                    <div className="food item" style={{backgroundImage:`url(${props.product.Image})`}}></div>
                </div>

    );
}

export default FoodCategoryInCircle;