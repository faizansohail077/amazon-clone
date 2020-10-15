import React, { useReducer } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer';
// import ReducerComp from '../reducer'
import { useStateValue } from '../StateProvider';


function Subtotal() {
    // const [{ basket }] = useReducer(ReducerComp, initialState);
    const {state} = useStateValue();
   const {basket,user} = state;

    return (

        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
