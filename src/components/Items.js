import React from 'react'
import { useSelector } from 'react-redux'

import { } from '../store/store'


const Items = () => {
    const items = useSelector(state => state.items)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row', marginTop: 40 }}>
            {items.map((item) => <div key={item.id} className="card">
                <img src={require(`../images/${item.image}.jpg`)} alt="" />
                <div className="card-info">
                    <h4>{item.title}</h4>
                    <span>Rs. {item.price}</span>
                </div>
                <button className="btn"> Add to Basket</button>
            </div>
            )}
        </div>
    )
}

export default Items
