import{configureStore} from "@reduxjs/toolkit"
import productsReducer from "./productsSlice"
import usersReducer from "./usersSlice"
import cartsReducer from"./cartSlice"
import postReducer from "./postSlice"
import todoReducer from "./Todoslice"
import quoteReducer from "./quoteSlice"

export const store = configureStore({
  reducer:{
    products: productsReducer,
    users:usersReducer,
    carts:cartsReducer,
    posts:postReducer,
    todos:todoReducer,
    quote:quoteReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch