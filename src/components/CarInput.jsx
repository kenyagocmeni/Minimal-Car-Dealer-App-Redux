// src/components/CarInput.jsx
import React, { useState } from "react"; // React ve useState hook'unu import ediyoruz
import { useDispatch } from "react-redux"; // Redux için dispatch fonksiyonunu kullanıyoruz
import { addCar } from "../features/cars/carsSlice"; // Araba eklemek için gerekli action'ı import ediyoruz
import "../index.css";

const CarInput = () => {
  // Form state'lerini oluşturuyoruz
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch(); // Redux store'a action göndermek için dispatch fonksiyonunu alıyoruz

  const handleSubmit = () => {
    // Eğer tüm alanlar doldurulmuşsa arabayı ekle
    if (brand && model && year && price) {
      dispatch(
        addCar({ brand, model, year: Number(year), price: Number(price) })
      ); // Redux store'a araba bilgilerini gönderiyoruz
      // Formu temizliyoruz
      setBrand("");
      setModel("");
      setYear("");
      setPrice("");
    }
  };

  return (
    <div>
      <div className="input-header-div">
        <h2>Yeni Araba Ekle</h2>
      </div>
      <div className="input-body-div">
        <input
          type="text"
          placeholder="Marka"
          value={brand}
          onChange={(e) => setBrand(e.target.value)} // Kullanıcının girdisini brand state'ine kaydediyoruz
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)} // Kullanıcının girdisini model state'ine kaydediyoruz
        />
        <input
          type="number"
          placeholder="Yıl"
          value={year}
          onChange={(e) => setYear(e.target.value)} // Kullanıcının girdisini year state'ine kaydediyoruz
        />
        <input
          type="number"
          placeholder="Fiyat"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Kullanıcının girdisini price state'ine kaydediyoruz
        />
      </div>
      <div className="input-submit-btn-div">
        <button className="input-submit-btn" onClick={handleSubmit}>Ekle</button>
      </div>{" "}
      {/* handleSubmit fonksiyonunu çağırıyoruz */}
    </div>
  );
};

export default CarInput; // Bileşeni dışa aktarıyoruz
