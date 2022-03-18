import React, {useEffect, useState} from 'react';

const url_for_burger = "https://yoyoburger.ro/wp-content/uploads/2019/07/Burger-YoYo-Black-2.png";
const url_for_pizza = "https://www.gannett-cdn.com/presto/2019/02/27/PCHH/8e02226a-b837-4adc-a4e5-70772cb3673e-GettyImages-1083487948.jpg?crop=2120,1188,x0,y140&width=2120&height=1188&format=pjpg&auto=webp";
const url_for_dulce = "https://desertdecasa.ro/wp-content/uploads/2014/05/papanasi-reteta.jpg";
const url_for_altele = "https://jamilacuisine.ro/wp-content/uploads/2016/04/Cozonac-fara-framantare-500x478.jpg";
const url_for_oferte = "https://www.lauralaurentiu.ro/wp-content/uploads/2019/10/porc-cu-legume-in-stil-chinezesc-reteta-pas-cu-pas-mancare-chinezeasca-cu-porc-si-legume-reteta-porc-chinezesc-reteta.jpg"
function ProductItem({product}) {

    const [url, setUrl] = useState("");
    useEffect(() => {
           if (product.category === "Burger") setUrl(url_for_burger);
    if (product.category === "Pizza") setUrl(url_for_pizza);
    if (product.category === "Dulciuri") setUrl(url_for_dulce);
    if (product.category === "Diverse") setUrl(url_for_altele);
    if (product.category === "Oferte") setUrl(url_for_oferte);
    }, []);




    return (

        <div className="food-card"
             style={{backgroundImage: `url('${url}')`}}>
            <div className="food-card-content">
                <div className="heading show">
                    <h2>{product.name}</h2>
                    <div className="shadow"></div>
                </div>
                <div className="heading author show">
                    <h5>By <a href="https://www.instagram.com/nobo.daniel/" className="profile">Nobo Daniel</a></h5>
                    <div className="shadow"></div>
                </div>
                <div className="hover-content">

                    <div className="food-card-properties">
                        <div><i className="fa fa-clock-o"></i><p>5 min</p></div>
                        <div><i className="fa fa-star" style={{color: "yellow"}}></i><p>//To do votes</p></div>
                        <div><i className="fa fa-money"></i><p>{product.price} Lei</p></div>
                    </div>
                    <div className="hr">
                        <div className="content">
                            <div className="description">
                                {product.description}
                            </div>
                            <div className="show-less"></div>
                        </div>
                        <a href="#" className="view-more">View More-></a>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ProductItem;