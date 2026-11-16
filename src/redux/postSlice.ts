import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type {
 PostsState,
  PostsResponse,
} from "../types/postTypes";
const API_URL = import.meta.env.VITE_API_URL;

const initialState : PostsState ={
  posts:[],
  loading: false,
  error:null,
};
export const fetchPosts = createAsyncThunk<PostsResponse>(
  "posts/fetchposts",
  async() => {
  const response = await axios.get(
    `${API_URL}/posts`
  );
  return response.data

  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
      })

      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = "Posts yuklenmedi";
      });
  },
});

export default postsSlice.reducer;