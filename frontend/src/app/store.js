import { configureStore } from '@reduxjs/toolkit'
import postReducers from '../features/postSlice'

export const store = configureStore({
  reducer: {
    posts: postReducers,
  },
})

