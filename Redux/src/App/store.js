import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import themeReducer from '../features/theme/themeSlice'
import userReducer from '../features/usersData/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    usersData: userReducer
  },
});

