import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const getPhoneBookValue = state => state.phoneBook.contacts;

export const { addContact, deleteContact } = phoneBookSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const setContacts = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
