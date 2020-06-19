import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className="banner-section v-center">
            <div className="shoe-cont" >
                <img src={require('../images/shoe.png')}
                    alt="s" />
                <h2>The Best Selling Brands Store</h2>
            </div>
            <Link to='/basket'><FaShoppingCart color="#ccc" size='3rem' style={{ position: 'relative', bottom: 45 }} /></Link>
        </section>
    )
}

export default Banner
