import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stolenBikes from './stolenBikeReducer';

export const store = configureStore({
  reducer: {
    stolenBikes,
  },
  devTools: process.env.NODE_ENV === 'development'
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
