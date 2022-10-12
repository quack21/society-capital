import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';

export const store = configureStore({
  reducer: { 
    loginReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>