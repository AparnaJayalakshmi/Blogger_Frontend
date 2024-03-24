import axios from '../../axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    post : [],
    status : 'idle',
    error : null,
}

export const fetchPostsById = createAsyncThunk(
    'posts/fetchPostsById',
    async (postId) => {
        const response = await axios.get(`blog/${postId}/`)
        return response.data
    }
) 

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {
 
    },
    extraReducers(builder){
        builder
        .addCase(fetchPostsById.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchPostsById.fulfilled, (state,action) => {
            state.status = "succeeded";
            state.post = action.payload;
        })
        .addCase(fetchPostsById.rejected, (state,action) => {
            state.status = "failed";
            state.error = action.error.message;
        } )
    }
})

export const selectPost = (state) => state.post.post;
export const getPostsStatus = (state) => state.post.status;
export const getPostsError = (state) => state.post.error;


export default postSlice.reducer;


