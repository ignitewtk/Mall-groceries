import { createSlice } from '@reduxjs/toolkit'

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
        order: 'default'
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
            console.log("set filters in reducer", action)
        },
    }
})

export const { applyFilters } = productSlice.actions
export const selectFilters = (state) => state.product.filters
export const selectCategory = (state) => state.product.category
export const selectRating = (state) => state.product.rating
export const selectPrice = (state) => state.product.price
export default productSlice.reducer

