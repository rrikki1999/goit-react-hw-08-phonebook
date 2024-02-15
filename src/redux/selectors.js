import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectContactsError = state => state.contacts.error;
export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter.filter || '';

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!contacts) {
      return [];
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);


export const selectAuthToken = state => state.auth.token;
export const selectAuthUserData = state => state.auth.userData;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
export const selectAuthisLoading = state => state.auth.isLoading;

