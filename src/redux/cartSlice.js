import { createSlice } from '@reduxjs/toolkit'
import { CartProducts } from '../components/cart/dataCart'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        /* cartList item: {
            id: <string>,
            name: <string>,
            price: <double>,
            count: <double>
        } */
        cartList: CartProducts,
        count: 0
    },
    reducers: {
        addOneToCount: (state, action) => {
            state.count = state.count + 1
        },
        addItem: (state, action) => {
            var cartList_old = state.cartList
            cartList_old.push(action.payload)
            state.cartList = cartList_old
        },
        deleteItem: (state, action) => {
            var cartList_new = []
            for (var i=0; i<state.cartList.length;i++) {
                if (state.cartList[i].name !== action.payload) {
                    cartList_new.push(state.cartList[i])
                }
            }
            state.cartList = cartList_new
        },
    }
})

export const { addOneToCount, addItem, deleteItem} = cartSlice.actions
export const selectCartList = (state) => state.cart.cartList
export const selectCount = (state) => state.cart.count

export default cartSlice.reducer

