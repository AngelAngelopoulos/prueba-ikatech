import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const cartStore = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(cartStore)

export type RootState = ReturnType<typeof cartStore.getState>

export type AppDispatch = typeof cartStore.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
