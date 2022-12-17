import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterSlice from './filerSlicer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
