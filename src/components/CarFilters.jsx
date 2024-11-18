// src/components/CarFilters.jsx
import React, { useState } from "react"; // React ve useState hook'unu import ediyoruz
import { useDispatch } from "react-redux"; // Redux store'a action göndermek için useDispatch hook'unu kullanıyoruz
import { updateFilters } from "../features/cars/carsSlice"; // Filtreleri güncellemek için gerekli action'ı import ediyoruz
import "../index.css";

const CarFilters = () => {
  const [brand, setBrand] = useState(""); // Marka filtresi için state
  const [maxPrice, setMaxPrice] = useState(""); // Fiyat filtresi için state

  const dispatch = useDispatch(); // Dispatch fonksiyonunu alıyoruz

  const handleFilterUpdate = () => {
    // Filtreleri Redux store'a gönderiyoruz
    dispatch(
      updateFilters({
        brand,
        maxPrice: Number(maxPrice), // Fiyat sayıya çevriliyor
      })
    );
  };

  return (
    <div>
      <div className="filter-header-div">
        <h2>Filtreler</h2>
      </div>
      <div className="filter-body-div">
        <input
          type="text"
          placeholder="Marka ara"
          value={brand}
          onChange={(e) => setBrand(e.target.value)} // Kullanıcının girdisini brand state'ine kaydediyoruz
        />
        <input
          type="number"
          placeholder="Maksimum fiyat"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)} // Kullanıcının girdisini maxPrice state'ine kaydediyoruz
        />
      </div>
      <div className="filter-submit-btn-div">
        <button className="filter-submit-btn" onClick={handleFilterUpdate}>Filtrele</button>{" "}
      </div>

      {/* Filtreleme işlemini tetikliyoruz */}
    </div>
  );
};

export default CarFilters; // Bileşeni dışa aktarıyoruz
