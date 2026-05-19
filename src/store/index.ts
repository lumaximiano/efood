import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinhoSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch