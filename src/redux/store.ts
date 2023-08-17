import { configureStore } from '@reduxjs/toolkit'

import userReducer from './usersSlice'
import { cartReducer } from './cartSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        cart:cartReducer,
    }
})

export default store;