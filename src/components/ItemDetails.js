import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ItemDetails = () => {
    const { id } = useParams()
    const { title, image, price } = useSelector(state => state.items[id])
    return (
        <div className="item-detail v-center">
            <img src={require(`../images/${image}.jpg`)} alt="item" />
            <h3>{title}</h3>
            <span>{price}</span>
            <button className="btn"> Add to Basket</button>
        </div>
    )
}

export default ItemDetails
