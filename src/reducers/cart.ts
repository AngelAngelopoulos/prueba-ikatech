import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Zapato } from '../interfaces/Zapato'
import { AppThunk, RootState } from '../stores/cart';

export interface CartState {
  articles: Array<Zapato>;
  status: 'loading' | 'success' | 'failed'
}


const initialState: CartState = {
  articles: [],
  status: 'loading'
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Zapato>) => {
      state.articles.push(action.payload)
    },
  },
})

export const { addArticle } = cartSlice.actions

export const articlesInCart = (state: RootState) => state.cart;

export const addShoeToCartAction = (zapato: Zapato): AppThunk => (dispatch, getState) => {
  dispatch(addArticle(zapato))
}

export default cartSlice.reducer
