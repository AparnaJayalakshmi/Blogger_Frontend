import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "../features/blogger/bloggerSlice"
import postReducer from "../features/blogger/singleBlogSlice" 
import categoriesReducer from "../features/categories/categoriesSlice"
import authReducer from "../features/authentication/authSlice"
import usersReducer from "../features/users/usersSlice"

export const store = configureStore({
    reducer : {
       posts : postsReducer,
       post : postReducer,
       categories : categoriesReducer,
       auth : authReducer,
       users: usersReducer,

    },
});