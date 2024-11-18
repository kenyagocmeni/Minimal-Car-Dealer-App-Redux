// src/components/CarItem.jsx
import React from 'react'; // React'i import ediyoruz
import { useDispatch } from 'react-redux'; // Redux store'a action göndermek için useDispatch hook'unu kullanıyoruz
import { deleteCar } from '../features/cars/carsSlice'; // Araba silmek için gerekli action'ı import ediyoruz

const CarItem = ({ id, brand, model, year, price }) => {
  const dispatch = useDispatch(); // Dispatch fonksiyonunu alıyoruz

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{brand} {model}</h3> {/* Araba marka ve modelini gösteriyoruz */}
      <p>Yıl: {year}</p> {/* Araba üretim yılını gösteriyoruz */}
      <p>Fiyat: {price} TL</p> {/* Araba fiyatını gösteriyoruz */}
      <button onClick={() => dispatch(deleteCar(id))}>Sil</button> {/* Arabayı silmek için action'ı tetikliyoruz */}
    </div>
  );
};

export default CarItem; // Bileşeni dışa aktarıyoruz
