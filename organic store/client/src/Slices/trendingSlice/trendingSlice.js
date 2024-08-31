import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'trendingproducts/getproducts',
    async ( ) => {
        try{
            const response = await axios.get("http://localhost:8888/api/trendingproducts");
            const res = response.data;
            return res;
        }
            catch(error){
                throw error;
            }
    }
);
export const removeProduct = createAsyncThunk(
    'trendingproducts/removeproduct',
    async ( productid ) => {
        try{
            const response = await axios.delete(`http://localhost:8888/api/trendingproducts/${productid}`);
            const res = response.data;
            return res;
        }
            catch(error){
                throw error;
            }
    }
);
export const addProduct = createAsyncThunk(
    'trendingproducts/addproduct',
    async ( productid ) => {
        try{
            const response = await axios.put('http://localhost:8888/api/trendingproducts',productid);
            const res = response.data;
            return res;
        }
            catch(error){
                throw error;
            }
    }
);
export const shownontrendingproducts  = createAsyncThunk(
    'trendingproducts/shownontrendingproducts',
    async (  ) => {
        try{
            const response = await axios.get('http://localhost:8888/api/trendingproducts/shownontrendingproducts');
            const res = response.data;
            return res;
        }
            catch(error){
                throw error;
            }
    }
);

const trendingproductsSlice = createSlice({
    name: 'trendingproducts',
    initialState: {
        loading: false,
        trendingproducts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
                // state.categories = null;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.trendingproducts = action.payload;
                state.error = null;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.trendingproducts = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(removeProduct.pending, (state, action) => {
                state.loading = true;
                // state.categories = null;
                state.error = null;
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.trendingproducts = action.payload;
                state.error = null;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.loading = false;
                state.trendingproducts = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(addProduct.pending, (state, action) => {
                state.loading = true;
                // state.categories = null;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.trendingproducts = action.payload;
                state.error = null;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.trendingproducts = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(shownontrendingproducts.pending, (state, action) => {
                state.loading = true;
                // state.categories = null;
                state.error = null;
            })
            .addCase(shownontrendingproducts.fulfilled, (state, action) => {
                state.loading = false;
                state.trendingproducts = action.payload;
                state.error = null;
            })
            .addCase(shownontrendingproducts.rejected, (state, action) => {
                state.loading = false;
                state.trendingproducts = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
    }
});

export default trendingproductsSlice.reducer;
