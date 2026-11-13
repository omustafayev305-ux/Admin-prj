import{configureStore} from "@reduxjs/toolkit"
import productsReducer from "./productsSlice"
import usersReducer from "./usersSlice"
import cartsReducer from"./cartSlice"

export const store = configureStore({
  reducer:{
    products: productsReducer,
    users:usersReducer,
    carts:cartsReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch