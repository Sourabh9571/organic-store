import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotSellingProducts = createAsyncThunk(
    'sellingProducts/getnonsellingproducts',
    async () => {
        try {
            const response = await axios.get("http://localhost:8888/api/sellingproducts");
            const data = response.data;
            return data;
        }
        catch (error) {
            throw error
        }
    }
);
export const addinSellingProducts = createAsyncThunk(
    'sellingProducts/addinsellingproducts',
    async (product) => {
        try {
            const response = await axios.post("http://localhost:8888/api/sellingproducts",product);
            const data = response.data;
            return data;
        }
        catch (error) {
            throw error
        }
    }
);

export const removeFromSellingProducts = createAsyncThunk(
    'sellingProducts/removefromsellingproducts',
    async (productid) => {
        try {
            const response = await axios.delete(`http://localhost:8888/api/sellingproducts/${productid}`);
            const data = response.data;
            return data;
        }
        catch (error) {
            console.log(error)
            throw error
        }
    }
);

const sellingProductsSlice = createSlice({
    name: 'sellingproducts',
    initialState: {
        sellingproducts : [],
        loading : false ,
        error : null
    },
    extraReducers:(builder) => {
        builder
            .addCase(getNotSellingProducts.pending, (state, action) => {
                state.loading = true;
                // state.categories = null;
                state.error = null;
            })
            .addCase(getNotSellingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.sellingproducts = action.payload;
                state.error = null;
            })
            .addCase(getNotSellingProducts.rejected, (state, action) => {
                state.loading = false;
                state.sellingproducts = null;
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(addinSellingProducts.pending, (state, action) => {
                state.loading = true;
                // state.sellingproducts = null;
                state.error = null;
            })
            .addCase(addinSellingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.sellingproducts = action.payload;
                state.error = null;
            })
            .addCase(addinSellingProducts.rejected, (state, action) => {
                state.loading = false;
                state.sellingproducts = null;
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(removeFromSellingProducts.pending, (state, action) => {
                state.loading = true;
                // state.sellingproducts = null;
                state.error = null;
            })
            .addCase(removeFromSellingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.sellingproducts = action.payload;
                state.error = null;
            })
            .addCase(removeFromSellingProducts.rejected, (state, action) => {
                state.loading = false;
                state.sellingproducts = null;
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })    
    }
})
export default sellingProductsSlice.reducer;