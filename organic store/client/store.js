import { configureStore } from '@reduxjs/toolkit'
import userReducer from './src/Slices/userSlice/userSlice.js'
import categoryReducer from './src/Slices/categorySlice/categorySlice.js'
import productReducer from './src/Slices/adminItemsSlice/adminProductsSlice.js'
import trendingproudctsReducer from './src/Slices/trendingSlice/trendingSlice.js'
import sellingProductSlice from './src/Slices/sellingproductslice/sellingProductSlice.js'
import bestsellingslice from './src/Slices/bestsellingslice/bestsellingslice.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    products: productReducer,
    trendingproducts: trendingproudctsReducer,
    sellingproducts: sellingProductSlice,
    bestsellingproducts: bestsellingslice
  },
})

export default store;