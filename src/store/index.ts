import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinhoSlice'
import restaurantesReducer from './reducers/restaurantesSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    restaurantes: restaurantesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch