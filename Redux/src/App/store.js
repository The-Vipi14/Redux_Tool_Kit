import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import themeReducer from '../features/theme/themeSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer
  },
});

