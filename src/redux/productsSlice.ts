import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import type {
  Product,
  ProductsResponse,
  ProductsState,
  AddProductRequest,
  UpdateProductRequest,
} from "../types/productTypes";

const API_URL = import.meta.env.VITE_API_URL;

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<ProductsResponse>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `${API_URL}/products`
    );

    return response.data;
  }
);

export const addProduct = createAsyncThunk<
  Product,
  AddProductRequest
>(
  "products/addProduct",
  async (newProduct) => {
    const response = await axios.post(
      `${API_URL}/products/add`,
      newProduct
    );

    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk<
  Product,
  number
>(
  "products/fetchSingleProduct",
  async (id) => {
    const response = await axios.get(
      `${API_URL}/products/${id}`
    );

    return response.data;
  }
);

export const updateProduct = createAsyncThunk<
  Product,
  UpdateProductRequest
>(
  "products/updateProduct",
  async (data) => {
    const response = await axios.patch(
      `${API_URL}/products/${data.id}`,
      data
    );

    return response.data;
  }
);
export const deleteProduct = createAsyncThunk<number,number>(
  "products/deleteProduct",
  async(id)=> {
    await axios.delete (
      `${API_URL}/products/${id}`
    );

    return id;
  }
)
export const searchProduct = createAsyncThunk<
ProductsResponse,
string
>(
  "products/searchProducts",
  async(query)=> {
    const response = await axios.get(
      `${API_URL}/products/search?q=${query}`
    )
    return response.data;
  } 
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Products yuklenmedi";
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })

      .addCase(addProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Product elave olunmadi";
      })

      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })

      .addCase(fetchSingleProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Product tapilmadi";
      })

      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.products.findIndex(
          (product => product.id === action.payload.id)
        );

        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(updateProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Product update olunmadi";
      })
    .addCase(deleteProduct.pending,(state) => {
      state.loading = true;
      state.error=null;
    })
    .addCase(deleteProduct.fulfilled,(state,action)=>{
      state.loading = false;
      state.products = state.products.filter(
        (product => product.id !== action.payload)
      );
  })
    .addCase(deleteProduct.rejected,(state)=>{
      state.loading = false;
      state.error ="Product silinmedi";
    })
    .addCase(searchProduct.pending,(state)=>{
      state.loading= true;
      state.error = null
    })
    .addCase(searchProduct.fulfilled,(state,action) =>{
      state.loading=false;
      state.products = action.payload.products
    })
    .addCase(searchProduct.rejected,(state)=>{
      state.loading=false;
      state.error= "Product axtarilmadi"
    })
  },

});



export default productsSlice.reducer;