import { createAsyncThunk, createReducer, SerializedError } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Bike } from '../types';
import bikeSearchService from '../service';

interface StolenBikeData {
  list: Bike[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error?: SerializedError | undefined;
}

const initialState: StolenBikeData = {
  list: [],
  status: 'idle',
};

export const fetchStolenBikeData = createAsyncThunk(
  'bikeData',
  async ({ page, query }: { page: number; query?: string }, { getState, rejectWithValue }) => {
    return bikeSearchService.searchStolenBikes({ page, query });
  },
);

const stolenBikeDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchStolenBikeData.pending, (state) => {
      state.status = 'loading';
      state.error = undefined;
    })

    .addCase(fetchStolenBikeData.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.list = payload;
    })

    .addCase(fetchStolenBikeData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    });
});

// Selectors related to stolen bike state

export const selectStolenBikeState = (state: RootState) => state.stolenBikes;

export default stolenBikeDataReducer;
