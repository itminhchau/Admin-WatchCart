import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

const initialState = {
  mode: 'dark',
  current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
};
export const login = createAsyncThunk('users/login', async (payload, thunkAPI) => {
  const res = await userApi.login(payload);
  if (res && res.data.errCode === 0) {
    localStorage.setItem(StorageKeys.TOKEN, res.data.access_token);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(res.data.customer));
  } else {
    return res.data;
  }
  return res.data.customer;
});

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    logOut: (state, action) => {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(register.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.current = action.payload;
    // });

    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.current = action.payload;
    });
  },
});

export const { setMode, logOut } = globalSlice.actions;
export default globalSlice.reducer;
