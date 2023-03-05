import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
const selectFilter = state => state.filter.filterValue;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
