import React, {useEffect, useState} from 'react';
import FoodICategoriesList from "../components/foodItems/Category/FoodICategoriesList";
import "../components/foodItems/Category/FoodCategoryInCircle.css"
import axios from "axios";
import FoodItemList from "../components/foodItems/Products/FoodItemList";
import {useStore} from "../components/stores/store";
import {observer} from "mobx-react-lite";
import LoadingAnimation from "../components/loadingAnimations/LoadingAnimation";
import ProductItemList from "../components/foodItems/Products/ProductItemList";

function Menu() {

    const {productStore} = useStore();
    const {loadProducts, initialLoading, products} = productStore;
    useEffect(() => {
        if (products.length <= 1) loadProducts()
    }, [products.length, loadProducts]);


    return (
        <div>
            <FoodICategoriesList/>
            {initialLoading ? <LoadingAnimation/> : <ProductItemList products={products}/>}

        </div>
    );
}
export default observer(Menu);