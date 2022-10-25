import { createSlice } from '@reduxjs/toolkit'
import { CartProducts } from '../components/cart/dataCart'



export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        /* cartList item: {
            id: <string>,
            productName: <string>,
            price: <double>,
            count: <double>
        } */
        cartList: [
            // {
            //     id: 'id aaa',
            //     productName: 'aaa',
            //     price: -1,
            //     count: -1,
            //     src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            // }
        ],
        totalPrice: 0,
        count: 0
    },
    reducers: {
        addOneToCount: (state, action) => {
            state.count = state.count + 1
        },
        addItem: (state, action) => {
            /* 
                item : {
                    id: item.productName,
                    productName: item.productName,
                    price: item.price,
                    count: 1,
                    src: item.src
                }    
            */
            let item = action.payload
            var hasNew = true
            for (var i=0; i<state.cartList.length; i++) {
                // console.log(item.productName, item.productName,'----', state.cartList[i].productName)
                if (item.productName == state.cartList[i].productName) {
                    // console.log('equal')
                    state.cartList[i].count = state.cartList[i].count + 1
                    hasNew = false
                    break
                }}
                // else { console.log('inequal')}}
            if (hasNew) {
                // method 1
                // should not write as state.cartList.push(item), there will add undefined value. why ???
                // state.cartList.push({
                //     id: item.productName,
                //     productName: item.productName,
                //     price: item.price,
                //     count: 1,
                //     src: item.src
                // })

                // method 2
                state.cartList = [
                    ...state.cartList.slice(0),
                    {
                        id: item.productName,
                        productName: item.productName,
                        price: item.price,
                        count: 1,
                        src: item.src }
                ]}
            
                state.totalPrice = state.totalPrice + item.price
        }, 
        reduceItem: (state, action) => {
            /* 
                item : {
                    id: item.productName,
                    productName: item.productName,
                }    
            */
            let item = action.payload
            var itemIndex = -1
            for (var i=0; i<state.cartList.length; i++) {
                // console.log(item.productName, item.productName,'----', state.cartList[i].productName)
                if (item.productName == state.cartList[i].productName) {
                    // console.log('equal')
                    if (state.cartList[i].count === 1) {
                        state.totalPrice = state.totalPrice - state.cartList[i].price
                        state.cartList =  [
                            ...state.cartList.slice(0, i),
                            ...state.cartList.slice(i+1)]
                    } else {
                        state.cartList[i].count = state.cartList[i].count - 1
                        state.totalPrice = state.totalPrice - state.cartList[i].price
                        itemIndex = i
                        break}} 
                // else { console.log('inequal')}
            }
            if (itemIndex === -1) {
                console.log("No Item.")
            }
        },
        deleteItem: (state, action) => {
            let item = action.payload
            var idx = -1
            for (var i=0; i<state.cartList.length; i++) {
                if (item.productName == state.cartList[i].productName) {
                    idx = i
                    break}}
            state.totalPrice = state.totalPrice - state.cartList[i].price * state.cartList[i].count
            if (idx !== -1) {
                state.cartList = [
                    ...state.cartList.slice(0, idx),
                    ...state.cartList.slice(idx+1),]}}
            
    }
})

export const { addOneToCount, addItem, reduceItem, deleteItem } = cartSlice.actions
export const selectCartList = (state) => state.cart.cartList
export const selectCount = (state) => state.cart.count
export const selectTotalPrice = (state) => state.cart.totalPrice
export default cartSlice.reducer

