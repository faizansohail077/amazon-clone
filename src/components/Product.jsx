import React, { useReducer } from 'react'
// import { useStateValue } from '../StateProvider'
import './Product.css'

import ReducerComp, { initialState } from '../reducer'




function Product({ id, title, price, rating, image }) {

    const [{basket}, dispatch] = useReducer(ReducerComp, initialState);

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐ </p>
                            ))
                    }
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
