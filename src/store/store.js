import { createSlice, configureStore } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [
        { id: '1', title: 'Shoe', image: 'img1', price: 399, quantity: 1 },
        { id: '2', title: 'Shoe', image: 'img2', price: 299, quantity: 1 },
        { id: '3', title: 'Shoe', image: 'img3', price: 399, quantity: 1 },
        { id: '4', title: 'Shoe', image: 'img4', price: 499, quantity: 1 },
        { id: '5', title: 'Shoe', image: 'img5', price: 599, quantity: 1 },
        { id: '6', title: 'Shoe', image: 'img6', price: 699, quantity: 1 },
        { id: '7', title: 'Shoe', image: 'img7', price: 799, quantity: 1 },
        { id: '8', title: 'Shoe', image: 'img8', price: 899, quantity: 1 },
        { id: '9', title: 'Shoe', image: 'img9', price: 999, quantity: 1 },
    ],
    basket: [],
    totalAmount: 0
}

const basketSlice = createSlice({
    name: 'shoppingBasket',
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, action) => {
            // add item to basket using `state` and `action` props
        },
        remove: (action, state) => {

        },
        clearBasket: (action, state) => {

        }
    }
})

export const { add, remove, clearBasket } = basketSlice.actions

const store = configureStore({ reducer: basketSlice.reducer })

export { basketSlice, store }