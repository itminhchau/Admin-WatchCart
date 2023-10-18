import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
  isLogin: true,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
  },
});

export const { setMode, setLogin } = globalSlice.actions;
export default globalSlice.reducer;
