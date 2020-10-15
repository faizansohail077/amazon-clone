import React, { useReducer } from 'react'
import { initialState } from '../reducer';
import './CheckoutProduct.css'
import ReducerComp from '../reducer'



function CheckoutProduct({ id, title, image, price, rating }) {
    const [state, dispatch] = useReducer(ReducerComp, initialState);

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>🌟 </p>
                        ))}
                </div>

                <button onClick={removeFromBasket}> Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
