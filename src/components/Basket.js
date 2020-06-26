import React from 'react'
import { useSelector } from 'react-redux'
import { store, clearBasket, remove } from '../store/store'

const Basket = () => {
    const basket = useSelector(state => state.basket)
    const amount = basket.map(p => p.price)
    const totalAmount = amount.reduce((amt, item) => (amt += item), 0).toFixed(2)
    return (
        <div>
            <div className="amt">
                <span className="total-amt"> <span className="total">Total Amount</span> Rs.{totalAmount}</span>
            </div>
            {basket.length === 0 ? (<div className="empty">Your Basket is Empty, maybe start adding some items :)</div>) : basket.map((item, i) =>
                <div className="cart-info" key={i}>
                    <div className="container row v-center">
                        <div>
                            <h4>Item Image</h4>
                            <img src={require(`../images/${item.image}.jpg`)} style={{ width: '60px' }} alt="cartImage" />
                        </div>
                        <div>
                            <h4>Item Name</h4>
                            <span className="title">{item.title}</span>
                        </div>
                        <div>
                            <h4>Price</h4>
                            <span>Rs.{item.price}</span>
                        </div>
                        <button className="btn-del" onClick={() => { store.dispatch(remove(item.id)) }} >Delete</button>
                    </div>
                </div>
            )}
            <div className="order">
                {basket.length !== 0 ? <button className="btn-order" onClick={() => store.dispatch(clearBasket())}>Order</button> : null}
            </div>
        </div>
    )
}

export default Basket