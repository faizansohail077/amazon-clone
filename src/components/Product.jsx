import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'




function Product({ id, title, price, rating, image }) {
   
    // const[{basket},dispatch] = useStateValue()
   
   const addToBasket=(e)=>{

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
