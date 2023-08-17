import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addTocart: (state, action) => {
            const itemIncart = state.cartItems.find((item) => item._id === action.payload.id)
            if (itemIncart) {
                itemIncart.quantity++;

            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },

        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload)
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id == action.payload)
            if (item.quantity === 1) {
                
            } else {
                item.quantity--;
            }
            
        }
    }
    
});

export const cartReducer = cartSlice.reducer

export const {
    addTocart,
    decrementQuantity,
    incrementQuantity,
    
} = cartSlice.actions;