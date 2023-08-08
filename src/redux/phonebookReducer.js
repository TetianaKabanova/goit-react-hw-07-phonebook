import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setContacts, setFilter, deleteContact, setName, setNumber } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
