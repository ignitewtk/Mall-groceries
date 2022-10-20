import { configureStore } from '@reduxjs/toolkit'
import productSlice from './redux/productSlice'
import accountSlice from './redux/accountSlice'

export const store = configureStore({
    reducer: {
        account: accountSlice,
        product: productSlice
    }
})



