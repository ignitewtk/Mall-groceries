import { configureStore } from '@reduxjs/toolkit'
import productSlice from './redux/productSlice'
import accountSlice from './redux/accountSlice'
import cartSlice from './redux/cartSlice'

export const store = configureStore({
    reducer: {
        account: accountSlice,
        product: productSlice,
        cart: cartSlice,
    }
})



export const mapDispatchToProps = (dispatch) => {
    return {
      sendAction: () => {
        dispatch({
          type: "add_action"
        })
      }
    }
}

export const mapStateToProps = (state) => {
  return {state}
}