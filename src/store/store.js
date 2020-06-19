import { createSlice, configureStore } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [
        { id: '0', title: 'Shoe', image: 'img', price: 399 },
        { id: '1', title: 'Shoe1', image: 'img1', price: 299 },
        { id: '2', title: 'Shoe2', image: 'img2', price: 399 },
        { id: '3', title: 'Shoe3', image: 'img3', price: 499 },
        { id: '4', title: 'Shoe4', image: 'img4', price: 599 },
        { id: '5', title: 'Shoe5', image: 'img5', price: 699 },
        { id: '6', title: 'Shoe6', image: 'img6', price: 799 },
        { id: '7', title: 'Shoe7', image: 'img7', price: 899 },
        { id: '8', title: 'Shoe8', image: 'img8', price: 999 },
    ],
    basket: [],
}

const basketSlice = createSlice({
    name: 'shoppingBasket',
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, { payload }) => {
            state.basket.push(payload)
        },
        remove: (state, { payload }) => {
            const index = state.basket.findIndex(item => item.id === payload)
            return {
                ...state,
                basket: state.basket.filter((_, i) => i !== index),
            }
        },
        clearBasket: (state, { payload }) => {
            return {
                ...state,
                basket: [],
            }
        }
    }
})

export const { add, remove, clearBasket } = basketSlice.actions

const store = configureStore({ reducer: basketSlice.reducer })

export { basketSlice, store }