import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookReducer';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
