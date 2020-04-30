import { createSlice } from '@reduxjs/toolkit'


export const products = createSlice({
    name: 'products',
    initialState: {
      product: {}
    },
    reducers: {
      setProduct: (state, action) => {
        state.product = action.payload
      }
    }
  })
  
  export const fetchProduct = code => {
    return dispatch => {
      /* dispatch(ui.actions.setLoading(true)) */
      fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
        .then((res) => res.json())
        .then((json )=> {
          dispatch(products.actions.setProduct(json))
         /*  dispatch(ui.actions.setLoading(false)) */
        })
    }
  }