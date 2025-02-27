import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
  },
});