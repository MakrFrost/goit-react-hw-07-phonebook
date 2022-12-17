import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

export const filterSlicer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export default filterSlicer.reducer;

export const { changeFilter } = filterSlicer.actions;
