import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { postsReducer } from "./slices/posts";

const reducer = {
  auth: authReducer,
  posts: postsReducer
}

export const store = configureStore({
  reducer,
})