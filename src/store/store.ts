// jshint esversion:6
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features";
import { modalReducer } from "../features";
import logger from 'redux-logger'

// Export the redux store
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


// Infer the Rootstate and App dispatch type from the store
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch