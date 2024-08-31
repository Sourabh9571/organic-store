import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  getBestSellingProducts = createAsyncThunk(
    'bestsellingproducts/getting',
    async () => {
        try  {
            const response = await axios.get("http://localhost:8888/api/bestsellingproducts");
            const data = response.data;
            return data;
        }
        catch (err)  {
            throw err;
        }
    }
);
export const getNotBestSellingProducts = createAsyncThunk(
    'bestsellingproducts/gettingnotbestsellingproducts',
    async () => {
        try {
            const response = await axios.get("http://localhost:8888/api/bestsellingproducts/notbestsellingproducts")
            const data = response.data;
            return data;
        }
        catch(error) {
            throw error;
        }
    }
)
export const  addInBestSellingProducts = createAsyncThunk(
    'bestsellingproducts/adding',
    async (productid) => {
        try  {
            const response = await axios.post("http://localhost:8888/api/bestsellingproducts",productid);
            const data = response.data;
            return data;
        }
        catch (err)  {
            throw err;
        }
    }
);
export const  removeFromBestSellingProducts = createAsyncThunk(
    'bestsellingproducts/removing',
    async (productid) => {
        try  {
            const response = await axios.delete(`http://localhost:8888/api/bestsellingproducts/${productid}`);
            const data = response.data;
            return data;
        }
        catch (err)  {
            throw err;
        }
    }
);

const bestsellingproductsSlice = createSlice({
    name: 'bestsellingproducts',
    initialState: {
        products: [],
        loading: false,
        error: null,
        loading_of_adding: false,
        message_of_adding: '',
        error_of_adding: null,
        loading_of_removing: false,
        message_of_removing: '',
        error_of_removing: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBestSellingProducts.pending, (state, action) => {
                state.loading = true;
                state.products = [];
                state.error = null;
            })
            .addCase(getBestSellingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(getBestSellingProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(addInBestSellingProducts.pending, (state, action) => {
                state.loading_of_adding = true;
                state.message_of_adding = '';
                state.error_of_adding = null;
            })
            .addCase(addInBestSellingProducts.fulfilled, (state, action) => {
                state.loading_of_adding = false;
                state.message_of_adding = action.payload;
                state.error_of_adding = null;
            })
            .addCase(addInBestSellingProducts.rejected, (state, action) => {
                state.loading_of_adding = false;
                state.message_of_adding = '';
                state.error_of_adding =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(removeFromBestSellingProducts.pending, (state, action) => {
                state.loading_of_removing = true;
                state.message_of_removing = '';
                state.error_of_removing = null;
            })
            .addCase(removeFromBestSellingProducts.fulfilled, (state, action) => {
                state.loading_of_removing = false;
                state.message_of_removing = action.payload;
                state.error_of_removing = null;
            })
            .addCase(removeFromBestSellingProducts.rejected, (state, action) => {
                state.loading_of_removing = false;
                state.message_of_removing = '';
                state.error_of_removing =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(getNotBestSellingProducts.pending, (state, action) => {
                state.loading = true;
                state.products = [];
                state.error = null;
            })
            .addCase(getNotBestSellingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(getNotBestSellingProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
    }
})

export default bestsellingproductsSlice.reducer;