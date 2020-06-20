import { createSlice, configureStore } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [
        { id: '0', title: 'Shoe', image: 'img', price: 399, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '1', title: 'Shoe1', image: 'img1', price: 299, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '2', title: 'Shoe2', image: 'img2', price: 399, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '3', title: 'Shoe3', image: 'img3', price: 499, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '4', title: 'Shoe4', image: 'img4', price: 599, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '5', title: 'Shoe5', image: 'img5', price: 699, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '6', title: 'Shoe6', image: 'img6', price: 799, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '7', title: 'Shoe7', image: 'img7', price: 899, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
        { id: '8', title: 'Shoe8', image: 'img8', price: 999, description: "The Nike Blazer Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years." },
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