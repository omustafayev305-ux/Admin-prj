// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// import type {
//   UsersResponse,
//   UsersState,
// } from "./types/userTypes";

// const API_URL = import.meta.env.VITE_API_URL;

// const initialState: UsersState = {
//   users: [],
//   loading: false,
//   error: null,
// };
// export const fetchUsers=createAsyncThunk<UsersResponse>(
//   "users/fetchUsers",
//   async() => {
//     const response = await axios.get (
//       `${API_URL}/users`
//     );
//     return response.data;
//   }
// );
// const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload.users;
//       })

//       .addCase(fetchUsers.rejected, (state) => {
//         state.loading = false;
//         state.error = "Users yuklenmedi";
//       });
//   },
// });

// export default usersSlice.reducer;

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import type{
  UsersResponse,
  UsersState,
} from "../types/userTypes"
 const API_URL = import.meta.env.VITE_API_URL;

 const initialState: UsersState ={
  users:[],
  loading:false,
  error:null,
 }
export const fetchUsers = createAsyncThunk<UsersResponse>(
  "users/fetchUsers",
async()=>{
  const response=await axios.get(
     `${API_URL}/users`
  )
  return response.data
}
);
const usersSlice=createSlice({
  name:"users",
  initialState,
  reducers:{},

  extraReducers:(builder)=> {
    builder 
    .addCase(fetchUsers.pending,(state)=>{
      state.loading= true;
      state.error=null;
    })
   .addCase(fetchUsers.fulfilled,(state,action)=>{
    state.loading=false;
    state.users=action.payload.users;
   })
   .addCase(fetchUsers.rejected,(state)=>{
    state.loading=false;
    state.error="Users yuklenmedi"
   });
  }
})
export default usersSlice.reducer
