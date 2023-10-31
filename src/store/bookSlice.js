import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getBooks = createAsyncThunk('book/getBooks', async(_ , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;

        try{
            const res = await fetch('http://localhost:3500/book');
            const data = await res.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message)
        }
    })

export const inserBooks = createAsyncThunk('book/insertBooks', async(bookData , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch('http://localhost:3500/book',{
            method:'POST',
            body: JSON.stringify(bookData),
            headers:{
                'content-type': 'application/json; charset=UTF-8'
            }
        });
        
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})    


const bookSlice = createSlice({
    name:'book',
    initialState:{books:[] , isLoading: false},
    extraReducers:{
        //getbooks
        [getBooks.pending]: (state, action)=>{
            state.isLoading =true;
            state.error= null;
        },
        [getBooks.fulfilled]: (state, action)=>{
            state.isLoading =false;
            state.books= action.payload;           
        },
        [getBooks.rejected]: (state, action)=>{
            state.isLoading =false;
            state.error = action.payload;
        },

        //insert books

        [inserBooks.pending]:(state,action)=>{
            state.isLoading =true;
            state.error= null;
        },
        [inserBooks.fulfilled]:(state,action)=>{
            state.isLoading =false;
            state.books.push(action.payload);  
        },
        [inserBooks.rejected]:(state,action)=>{
            state.isLoading =false;
            state.error = action.payload;
        }
    }
})
export default bookSlice.reducer;