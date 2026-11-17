import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  TodosResponse,
  TodosState,
} from "../types/todoTypes";

const API_URL = import.meta.env.VITE_API_URL;

const initialState: TodosState ={
  todos:[],
  loading:false,
  error:null,
}
export const fetchTodos = createAsyncThunk<TodosResponse>(
  "todos/fetchTodos",
  async() =>{
    const response =await axios.get(
      `${API_URL}/todos`
    )
    return response.data
  }
);
 const todoSlice = createSlice ({
  name:"todos",
  initialState,
  reducers:{},
  extraReducers: (builder)=>{
    builder
    .addCase(fetchTodos.pending,(state)=> {
      state.loading= true;
      state.error=null;
    })
    .addCase(fetchTodos.fulfilled,(state,action)=> {
      state.loading= false;
      state.todos = action.payload.todos
    })
    .addCase(fetchTodos.rejected,(state)=>{
      state.loading=false;
      state.error="Todos yuklenmedi"
    })
  }
 })
 export default todoSlice.reducer 


