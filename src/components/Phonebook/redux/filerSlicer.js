import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action) => {
      action.payload.toLowerCase();
    },
  },
});

export default filterSlicer.reducer;

export const { changeFilter } = filterSlicer.actions;
