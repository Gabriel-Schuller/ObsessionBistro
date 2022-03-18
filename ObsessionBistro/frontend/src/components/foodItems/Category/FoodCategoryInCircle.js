import React from 'react';
import {useStore} from "../../stores/store";
import {observer} from "mobx-react-lite";


function FoodCategoryInCircle(props) {
    const {productStore} = useStore();
    const group = () => {
        productStore.loadGroupedProducts(props.product.Title);
    }
    return (

                <div className="clip-path-container" onClick={group}>
                    <div className="description-holder">
                        <h4>{props.product.Title}</h4>
                        <p>{props.product.Description}</p>
                    </div>
                    <div className="food item" style={{backgroundImage:`url(${props.product.Image})`}}></div>
                </div>

    );
}

export default observer(FoodCategoryInCircle);