import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value:[]
    },
    reducers: {
        addTCart:(state, action) => {
            const existingItem = state.value.find((item) => item.id === action.payload.id)
            if (!existingItem) {
                console.log('item added to cart')
                const { id, title, image, category, price } = action.payload;
                state.value.push({ id, title, image, category, price, quantity: 1 })
            }else {
                console.log('item already exists in the cart')
            }
        },

        removeFromCart:(state,action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)
            console.log('item removed',state.value,action.payload.id)
        },

        increment:(state, action) => {
            console.log('clicked increment')
            const item = state.value.find((item)=> item.id === action.payload.id)
            if (item) {
                item.quantity +=1
            }
        },

        decrement:(state, action) => {
            const item = state.value.find((item)=> item.id === action.payload.id)
            if (item && item.quantity > 1) {
                item.quantity -=1
            }
        },
    
    }
})

export const { addTCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer