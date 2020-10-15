import React, { useReducer } from 'react'
import './Checkout.css'
import { initialState } from '../reducer';
import ReducerComp from '../reducer'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useReducer(ReducerComp, initialState);
    return (

        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="car" />

            {
                basket?.length === 0 ? (
                    <div>
                        <h1>your shopping basket is empty</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, officia!
                        </p>
                    </div>
                ) : (
                        <div>
                            <h1 className="checkout__title">your shopping basket</h1>

                            {
                                basket?.map(item =>
                                    <CheckoutProduct
                                        item={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}

                                    />
                                )
                            }
                        </div>
                    )
            }
                </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />

                </div>
            )}
        </div>

    )
}

export default Checkout
