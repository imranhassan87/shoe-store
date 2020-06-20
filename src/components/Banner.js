import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Banner = () => {
    const basket = useSelector(state => state.basket)
    return (
        <section className="banner-section v-center">
            <div className="shoe-cont" >
                <img src={require('../images/shoe.png')}
                    alt="s" />
                <h2>The Best Selling Brands Store</h2>
            </div>
            <Link to='/basket'>
                <span>{basket.length}</span>
                <i className="fa icon">&#xf07a;</i>
            </Link>
        </section>
    )
}

export default Banner
