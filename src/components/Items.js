import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { store, add } from '../store/store'

const Items = () => {
    const items = useSelector(state => state.items)
    return (
        <div className="card-container">
            {items.map((item, i) => <div key={i} className="card">
                <img src={require(`../images/${item.image}.jpg`)} alt="" />
                <div className="card-info">
                    <h4>{item.title}</h4>
                    <h2>Basit</h2>
                    <span>Rs. {item.price}</span>
                </div>
                <div className="btn-cont row space-between v-center">
                    <button className="btn" onClick={() => store.dispatch(add(item))}> Add to Basket</button>
                    <Link to={`${i}`} className="btn"> Details</Link>
                </div>
            </div>
            )}
        </div>
    )
}

export default Items
