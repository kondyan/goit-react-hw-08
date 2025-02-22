import { createSelector } from "@reduxjs/toolkit";

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
