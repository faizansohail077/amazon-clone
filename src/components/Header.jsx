import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import { useStateValue } from '../StateProvider';
import {initialState} from '../reducer'
import ReducerComp from '../reducer'


function Header() {

    const [{basket},dispatch] = useReducer(ReducerComp,initialState);
    console.log({basket})
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">hello faizan</span>
                        <span className="header__optionLineTwo" >Sign in</span>
                    </div>
                </Link>



                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">return</span>
                        <span className="header__optionLineTwo">Order</span>
                    </div>
                </Link>



                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
