import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ( ) => {
        try{
            
            const response = await axios.get("http://localhost:8888/api/products");
            const res = response.data;
            return res;
        }
            catch(error){
                throw error;
            }
    }
);

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async(product) =>{
        try{
            const response = await axios.post("http://localhost:8888/api/image",product.image);
            const res = response.data;
            console.log(res);

            const pro = {
                ...product ,
                image: res
            }
            console.log(pro);
            const response2 = await axios.post("http://localhost:8888/api/products",pro);
            const res2 = response2.data;
            return res2;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
)
export const updateProduct = createAsyncThunk(
    'products/updating',
    async (product) => {
        try {
            if(product.image){
                const response = await axios.post("http://localhost:8888/api/image",product.image);
                const data = response.data;

                const response2 = await axios.delete(`http://localhost:8888/api/image/${product.oldimagename}`);
                const data2 = response2.data;
    
                product = {
                    ...product,
                    image: data
                }
            }
            console.log(product);
        //    const response = await axios.put("http://localhost:8888/api/products",product);
        //    const data = response.data;
        //    return data;
        }
        catch(error) {
            throw error;
        }
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        error: null,
        message_of_updateProduct: '',
        error_of_updateProduct: null,
        loading_of_updateProduct: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
                state.products = [];
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(addProduct.pending, (state, action) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.products = null;
                state.error =  action.error.message ? action.error.message : 'An error occurred';
            })
            .addCase(updateProduct.pending, (state, action) => {
                state.loading_of_updateProduct = true;
                state.message_of_updateProduct = null;
                state.error_of_updateProduct = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading_of_updateProduct = false;
                state.message_of_updateProduct = action.payload;
                state.error_of_updateProduct = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading_of_updateProduct = false;
                state.message_of_updateProduct = null;
                state.error_of_updateProduct =  action.error.message ? action.error.message : 'An error occurred';
            })
    }
});

export default productSlice.reducer;
