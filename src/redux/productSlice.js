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
            console.log("Apply filter:", action)
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
        },
        setListOrder: (state, action) => {
            // console.log(" list order action:", action)
            let listOrder = action.payload
            switch (listOrder) {
                case 'price+':
                    state.productList = state.productList.sort((a, b) => a.discountPrice - b.discountPrice)
                    break;
                case 'price-':
                    state.productList = state.productList.sort((a, b) => b.discountPrice - a.discountPrice)
                    break;
                case 'rating+':
                    state.productList = state.productList.sort((a, b) => a.rating - b.rating)
                    break;
                case 'rating-':
                    state.productList = state.productList.sort((a, b) => b.rating - a.rating)
                    break;
                default:
                    break;
            }
            
        }
    }
})

export const { applyFilters, displayImage, setProductList, setListOrder } = productSlice.actions
export const selectFilters = (state) => state.product.filters
export const selectCategory = (state) => state.product.category
export const selectRating = (state) => state.product.rating
export const selectPrice = (state) => state.product.price
export const selectDisplayedImage = (state) => state.product.displayedImage
export const selectProductList = (state) => state.product.productList
export const selectListOrder = (state) => state.product.order

export default productSlice.reducer

