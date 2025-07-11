import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import { productsApi } from '../features/productsApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
