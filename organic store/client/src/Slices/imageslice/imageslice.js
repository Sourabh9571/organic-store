import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadImage = createAsyncThunk(
    'image/upload',
    async (image) => {
        try {
            const response = await axios.post("http://localhost:8888/api/image",image);
            const res = response.data;
            console.log(res);
            return res;
        }
        catch(err){
            throw err;
        }
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        image: null,
        loading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
                state.image = null;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.image = action.payload;
                state.error = null;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.image = null;
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
    }
})
export default imageSlice.reducer;