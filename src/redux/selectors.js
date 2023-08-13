import { createSelector } from 'reselect';

export const selectContacts = state => state.phonebook.contacts.items;
export const selectIsLoading = state => state.phonebook.contacts.isLoading;
export const selectError = state => state.phonebook.contacts.error;
export const selectFilter = state => state.phonebook.filter;

export const getVisibleContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filter) => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
