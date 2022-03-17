import React from 'react';
import FoodItem from "./FoodItem";
import ProductItem from "./ProductItem";
import "./ProductItem.css"

function ProductItemList({products}) {
    return (
         <div className="flexbox">
             {products.map(product => (
                 <ProductItem product={product} key={product.id}/>
             ))}
         </div>
    );
}

export default ProductItemList;