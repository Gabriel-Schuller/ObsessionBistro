import React, {useEffect} from 'react';
import FoodItem from "../components/foodItems/Products/FoodItem";
import FoodItemList from "../components/foodItems/Products/FoodItemList";
import Login from "../components/userAccess/Login"
import ToastStyled, {showErrorToast} from "../components/toasts/ToastStyled";
import {useStore} from "../components/stores/store";
import ProductItemList from "../components/foodItems/Products/ProductItemList";
import {observer} from "mobx-react-lite";

function Offers() {
    const {productStore}=useStore()
    useEffect(() => {
        productStore.loadGroupedProducts("Oferte");
    }, [productStore.groupedCategory]);

    return (
        <div>
            <ProductItemList products={productStore.groupedProducts}/>
        </div>
    );
}

export default observer(Offers);