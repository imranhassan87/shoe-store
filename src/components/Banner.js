import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Banner = () => {
    return (
        <section className="banner-section v-center">
            <div className="shoe-cont" >
                <img src={require('../images/shoe.png')}
                    alt="s" />
                <h2>The Best Selling Brands Store</h2>
            </div>
            <div className="icon">1</div>
            <FaShoppingCart color="#ccc" size='3rem' style={{ position: 'relative', bottom: 45 }} />
        </section>
    )
}

export default Banner
