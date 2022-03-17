import React, {useState, useEffect} from 'react';
import "./FoodCategoryInCircle.css"
import FoodCategoryInCircle from "./FoodCategoryInCircle";
import axios from "axios";

const burger = {
    Title: 'Burger',
    Description: 'Burgerul OBSESSION este cea mai buna inventie de la painea prajita incoace.',
    Image: 'https://media.istockphoto.com/photos/ro/burger-de-br%C3%A2nz%C4%83-cu-sl%C4%83nin%C4%83-pe-fond-negru-%C3%AEntunecat-id1295796202?s=612x612'
};
const pizza = {
    Title: 'Pizza',
    Description: 'Pizza OBSESSION este cea mai buna inventie de la painea cu usturoi incoace.',
    Image: 'https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w='
};
const sweets = {
    Title: 'Dulciurile',
    Description: 'Nobbo este cofetar. Asadar, cele mai bune dulciuri le gasiti la OBSESSION BISTRO',
    Image: 'https://chefspencil.com/wp-content/uploads/Papanasi.jpg'

};
const others = {
    Title: 'Diverse',
    Description: 'Nobo a fost inventiv si s-a aventurat in preparatele Chefi Fara Limite',
    Image: 'https://jamilacuisine.ro/wp-content/uploads/2016/04/Cozonac-fara-framantare-500x478.jpg'
};

function FoodICategoriesList() {

    const [products, setproducts] = useState([]);

    useEffect(async () => {
        const response = await axios.get("https://localhost:44305/api/Products");
        setproducts(prevState => response.data)
    }, []);



    return (
        <div className="food-item-body">

            <div className="all-the-foods">
                <FoodCategoryInCircle product={burger}/>
                <FoodCategoryInCircle product={pizza}/>
                <FoodCategoryInCircle product={sweets}/>
                <FoodCategoryInCircle product={others}/>
            </div>
        </div>
    );
}

export default FoodICategoriesList;