import { createSlice } from '@reduxjs/toolkit'
import eggImage from '../components/product/img/Fresh Eggs.jpg'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        filters: {
            category: 'all',
            rating: 0,
            price: 0
        },
        category: 'all',
        rating: 0,
        price: 0,
        order: 'default',
        displayedImage: eggImage,
        productList: []
    },
    reducers: {
        applyFilters: (state, action) => {
            state.filters = {
                category: 'veges',
                rating: 3,
                price: 10
            }
            state.category = 'veges'
            state.rating = 3
            state.price = 10
        },
        displayImage: (state, action) => {
            if (action.payload.length !== 0) {
                // state.displayedImage = URL.createObjectURL(new Blob([action.payload]))
                state.displayedImage = action.payload
            } else {
                state.displayedImage = eggImage
            }
            // state.displayedImage = action.payload
        },
        setProductList: (state, action) => {
            console.log("product list action:", action)
            state.productList = action.payload
        }
    }
})

export const { applyFilters, displayImage, setProductList } = productSlice.actions
export const selectFilters = (state) => state.product.filters
export const selectCategory = (state) => state.product.category
export const selectRating = (state) => state.product.rating
export const selectPrice = (state) => state.product.price
export const selectDisplayedImage = (state) => state.product.displayedImage
export const selectProductList = (state) => state.product.productList

export default productSlice.reducer

