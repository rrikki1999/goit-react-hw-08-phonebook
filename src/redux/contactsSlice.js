// import { createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './operations';

// const initialContactsState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// };
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialContactsState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.contacts.isLoading = true;
//         state.contacts.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.contacts.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.items = [...state.contacts.items, action.payload];
//         state.contacts.error = null;
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         console.error('Add Contact Rejected:', action.error);
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.contacts.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(
//           contact => contact.id !== action.payload.id
//         );
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { $authInstance } from './auth/authSlice';

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await $authInstance.get('/contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  'contacts/apiAddContact',
  async (formData, thunkApi) => {
    try {
      const { data } = await $authInstance.post('/contacts', formData);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRemoveContact = createAsyncThunk(
  'contacts/apiRemoveContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await $authInstance.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(apiRemoveContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContact.pending,
          apiRemoveContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiRemoveContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;