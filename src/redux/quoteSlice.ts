import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  QuotesResponse,
  QuotesState,
} from "../types/quoteTypes";

const API_URL = import.meta.env.VITE_API_URL;

const initialState: QuotesState={
  quotes:[],
  loading:false,
  error:null,
};
export const fetchQuotes = createAsyncThunk<QuotesResponse>(
  "quotes/fetchQuotes",
  async() => {
    const response = await axios.get(
      `${API_URL}/quotes`
    );
    return response.data
  }
);
const quotesSlice = createSlice({
  name:"quotes",
  initialState,
  reducers: {},
  extraReducers:(builder)=> {
    builder
    .addCase(fetchQuotes.pending,(state)=> {
      state.loading= true;
      state.error = null;
    })
    .addCase(fetchQuotes.fulfilled,(state,action)=>{
      state.loading=false;
      state.quotes=action.payload.quotes
    })
    .addCase(fetchQuotes.rejected,(state)=>{
      state.loading=false;
      state.error="Quotes yuklenmedi"
    })
  }
})
export default quotesSlice.reducer