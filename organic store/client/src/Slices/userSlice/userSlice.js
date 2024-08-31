import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userdetails, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:8888/api/auth/login", userdetails);
            const res = response.data;
            localStorage.setItem('user', JSON.stringify(res));
            return res;
        } catch (error) {
            if (error.response.status === 400 && error.response.data === "Wrong password") {
                // Handle incorrect password scenario
                return rejectWithValue('Incorrect password');
            }
            else if (error.response.status === 404 && error.response.data === "User not exists") {
                // Handle incorrect password scenario
                return rejectWithValue('User Not exists');
            }
            else if (error.response.status === 400 && error.response.data === "You are not admin") {
                // Handle incorrect password scenario
                return rejectWithValue('You are not admin');
            }
             else {
                // Handle other errors
                throw error;
            }
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload ? action.payload : 'An error occurred';
            })
    }
});

export default userSlice.reducer;
