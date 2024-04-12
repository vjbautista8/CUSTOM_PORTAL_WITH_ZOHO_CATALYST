import { configureStore } from '@reduxjs/toolkit';
import userSlice from './redux/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
