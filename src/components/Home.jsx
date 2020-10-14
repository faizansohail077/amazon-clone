import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="name">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="car" />
            <div className="home__row">
                <Product id={1234} price={7.25} rating={2} title="books for success" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
                <Product id={1234} price={7.25} rating={2} title="books for success" image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
            </div>

            <div className="home__row">
                <Product id={1234} price={7.25} rating={2} title="books for success" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
                <Product id={1234} price={7.25} rating={2} title="books for success" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
                <Product id={1234} price={7.25} rating={2} title="books for success" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            </div>


            <div className="home__row">
                <Product id={1234} price={7.25} rating={2} title="books for success" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            </div>
        </div>
    )
}

export default Home
