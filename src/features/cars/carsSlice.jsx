// src/features/cars/carsSlice.js
import { createSlice } from '@reduxjs/toolkit'; // createSlice, reducer ve action oluşturmayı kolaylaştırır

// Başlangıç state'i (Arabalar ve filtre bilgisi için)
const initialState = {
  items: [], // Arabalar listesi
  filters: {
    brand: '', // Marka filtresi
    maxPrice: 0, // Fiyat filtresi
  },
};

// Slice oluşturuyoruz
const carsSlice = createSlice({
  name: 'cars', // Slice'ın ismi
  initialState, // Başlangıç state'i
  reducers: {
    // Yeni araba ekleme reducer'ı
    addCar: (state, action) => {
      state.items.push({
        id: Date.now().toString(), // Her araba için eşsiz bir ID oluşturuyoruz
        ...action.payload, // Kullanıcıdan gelen araba bilgilerini ekliyoruz
      });
    },
    // Araba silme reducer'ı
    deleteCar: (state, action) => {
      // ID'ye göre arabayı listeden çıkarıyoruz
      state.items = state.items.filter((car) => car.id !== action.payload);
    },
    // Fiyat ve marka filtresini güncelleyen reducer
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }; // Filtreleri güncelliyoruz
    },
  },
});

// Reducer'lar için action'ları dışa aktarıyoruz
export const { addCar, deleteCar, updateFilters } = carsSlice.actions;

// Reducer'ı dışa aktarıyoruz
export default carsSlice.reducer;
