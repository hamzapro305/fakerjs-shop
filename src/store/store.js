import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./products/products"

export const store = configureStore({
    reducer: {
        Products: ProductReducer
    }
})