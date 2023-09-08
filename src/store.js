import { configureStore } from '@reduxjs/toolkit';
import globalSlice from 'state/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
