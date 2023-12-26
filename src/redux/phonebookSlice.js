import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    createContactAction: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },

    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { createContactAction, deleteContactAction, setFilterAction } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
