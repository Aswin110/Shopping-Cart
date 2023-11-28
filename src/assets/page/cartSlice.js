import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value:[]
    },
    reducers: {
        addTCart:(state, action) => {
            state.value.push(action.payload)
        },

        removeFromCart:(state,action) => {
            state.value = state.value.filter((item) => item.id === action.payload.id)
        }
    }
})

export const {addTCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer