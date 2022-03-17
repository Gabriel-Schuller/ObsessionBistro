import React, {useEffect, useState} from 'react';
import DownPageAdvertizer from "../components/HomepageAdvertisers/DownPageAdvertizer";
import FoodItemList from "../components/foodItems/Products/FoodItemList";
import HomePageHead from "../components/homepageHead/HomePageHead";
import axios from "axios";
import AxiosGetProducts from "../components/axios/AxiosUtils";
import {observer} from "mobx-react-lite";

function HomePage() {

    const [homepageProducts, setHomepageProducts] = useState([]);
    useEffect(async () => {
        var response = await axios.get("https://localhost:44305/api/Products");
        response.data.length = 3;
        setHomepageProducts(prevState => response.data);
    }, []);


    return (
        <div className="homePage">

            <HomePageHead/>
            <FoodItemList products={homepageProducts}/>
            <DownPageAdvertizer/>
        </div>
    );
}

export default HomePage;