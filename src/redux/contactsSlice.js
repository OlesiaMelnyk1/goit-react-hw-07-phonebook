import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from './operations';

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
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
        state.isLoading = false;
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContacts.rejected, handleRejected),
});

export const contactsReducer = contactSlice.reducer;
