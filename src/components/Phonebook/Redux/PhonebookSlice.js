import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItemContact(state, action) {
      state.items.push(action.payload);
    },
    removeItemContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filteredContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addItemContact, removeItemContact, filteredContact } =
  phonebookSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedReducers = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);
