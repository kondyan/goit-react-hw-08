import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.contacts.isLoading;

export const selectAllContacts = (state) => state.contacts.items;

const selectContacts = (state) => state.contacts.items;
const selectFilterStatus = (state) => state.filters.status;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterStatus],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
