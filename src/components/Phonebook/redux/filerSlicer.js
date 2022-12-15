import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (_, action) => action.payload.toLowerCase(),
    reset: () => '',
  },
});

export const filterReducer = filterSlicer.reducer;

export const { change, reset } = filterSlicer.actions;
