import { configureStore } from "@reduxjs/toolkit";
import books from './bookSlice'

export const store = configureStore({
    reducer:{
      books,
    }
})