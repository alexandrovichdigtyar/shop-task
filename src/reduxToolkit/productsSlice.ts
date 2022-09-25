import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialStateType } from './types';

const APIUrl = "https://61ec9caff3011500174d21ce.mockapi.io/products";

export const fetchProductList = createAsyncThunk(
  'products/fetchProductLis',
  async () => {
    const response = await axios.get(APIUrl);
    return response.data;
  }
)

export const deleteProductItem = createAsyncThunk(
  'products/deleteProductItem',
  async (id) => {
    const response = await axios.delete(`${APIUrl}/${id}`)
    return response.data.id;
  }
)

export const editProductItem = createAsyncThunk(
  'products/editProductItem',
  async (editedProduct) => {
    const response = await axios.put(`${APIUrl}/${editedProduct.id}`, editedProduct)
    return response.data;
  }
)

export const addNewProductItem = createAsyncThunk(
  'products/addNewProductItem',
  async (newProduct) => {
    const response = await axios.post(APIUrl, newProduct);
    return response;
  }
)

const initialState: initialStateType = {
  products: [],
  isLoading: true,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchProductList.rejected, (state) => {
      state.isLoading = false;
    })
    builder.addCase(deleteProductItem.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(deleteProductItem.fulfilled, (state, action) => {
      console.log("ready")
      state.isLoading = false;
      if (state.products) {
        const updatedProducts = state.products.filter(product => product.id !== action.payload);
        state.products = updatedProducts;
      }
    })
    builder.addCase(editProductItem.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(editProductItem.fulfilled, (state, action) => {
      if (state.products) {
        const updatedProducts = state.products.map(product => product.id === action.payload.id ? action.payload : product);
        state.products = updatedProducts;
      }
      state.isLoading = false;
    })
    builder.addCase(addNewProductItem.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(addNewProductItem.fulfilled, (state, action) => {
      if(state.products) {
        state.products.push(action.payload.data);
      }
      state.isLoading = false;
    })
  },
});
