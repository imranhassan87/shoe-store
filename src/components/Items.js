import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { store, add } from '../store/store'

const Items = () => {
    const items = useSelector(state => state.items)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row', marginTop: 40 }}>
            {items.map((item, i) => <div key={i} className="card">
                <img src={require(`../images/${item.image}.jpg`)} alt="" />
                <div className="card-info">
                    <h4>{item.title}</h4>
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
