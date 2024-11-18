// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'; // Redux Toolkit'ten configureStore fonksiyonunu import ediyoruz
import carsReducer from '../features/cars/carsSlice'; // Arabalar için oluşturduğumuz reducer'ı import ediyoruz

// Store'u oluşturuyoruz ve reducers'ı tanımlıyoruz
export const store = configureStore({
  reducer: {
    cars: carsReducer, // "cars" state'i carsReducer tarafından yönetilecek
  },
});
