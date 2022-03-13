import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import "./CartButton.css"


function CartButton() {
    return (
        <div className="cart">
            <FaShoppingCart size="2rem"/>
        </div>
    );
}

export default CartButton;