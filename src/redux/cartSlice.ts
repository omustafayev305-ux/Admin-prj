import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  CartState,
  CartsResponse,
} from "../types/cartTypes";
const API_URL = import.meta.env.VITE_API_URL;
const initialState:CartState ={
  carts:[],
  loading:false,
  error:null
  
};
export const fetchCarts = createAsyncThunk<CartsResponse>(
  "carts/fetchCarts",
  async() => {
    const response = await axios.get(
      `${API_URL}/carts`
    );
    return response.data
  }
);
const cartsSlice= createSlice ({
  name:"carts",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
   builder 
   .addCase(fetchCarts.pending,(state)=> {
    state .loading= true;
    state.error= null;
   })
    .addCase(fetchCarts.fulfilled,(state,action)=>{
      state.loading=false;
      state.carts=action.payload.carts;
    })
    .addCase(fetchCarts.rejected,(state) =>{
      state.loading= false;
      state.error= "cart yuklenmedi"
    })
 
  }
})
export default cartsSlice.reducer;

