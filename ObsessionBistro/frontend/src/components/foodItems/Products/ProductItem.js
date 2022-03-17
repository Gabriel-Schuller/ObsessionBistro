import React from 'react';

function ProductItem({product}) {
    return (

        <div className="food-card"
             style={{backgroundImage: `url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}>
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