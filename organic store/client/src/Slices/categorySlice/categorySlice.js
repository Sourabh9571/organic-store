import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async ( ) => {
        try{
            const response = await axios.get("http://localhost:8888/api/categories");
            const res = response.data;
            return res;
        }
            catch(error){
                throw error;
            }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        loading: false,
        categories: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state, action) => {
                state.loading = true;
                // state.categories = null;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.categories = null;
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
    }
});

export default categorySlice.reducer;
