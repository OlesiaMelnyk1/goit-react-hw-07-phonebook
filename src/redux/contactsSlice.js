import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, { payload }) {
  state.error = payload;
  state.isLoading = false;
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
        state.isLoading = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactSlice.reducer;
