import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";


const initialState = {
    categories : [],
    status : 'idle',
    error:null,
}

export const fetchCategories = createAsyncThunk (
    'categories/fetchCategories',
    async () => {
        const response = await axios.get('category/')
        return response.data
    }
)

const categoriesSlice  = createSlice ({
    name : "categories",
    initialState,
    reducers : {
        
    },
    extraReducers(builder){
        builder 
        .addCase(fetchCategories.pending, (state,action) => {
            state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state,action) => {
            state.status = "succeeded"
            state.categories = action.payload

        })
        .addCase(fetchCategories.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectAllCategories = (state) => state.categories.categories
export const getCategoriesStatus = (state) => state.categories.status
export const getCategoriesError = (state) => state.categories.error

export default categoriesSlice.reducer