// src/components/CarList.jsx
import React from 'react'; // React'i import ediyoruz
import { useSelector } from 'react-redux'; // Redux store'dan state çekmek için useSelector hook'unu kullanıyoruz
import CarItem from './CarItem'; // Tek bir arabayı göstermek için CarItem bileşenini import ediyoruz

const CarList = () => {
  const cars = useSelector((state) => state.cars.items); // Redux store'dan arabalar listesini çekiyoruz
  const filters = useSelector((state) => state.cars.filters); // Redux store'dan filtre bilgilerini çekiyoruz

  // Filtreleme işlemi: Arabaları markaya ve maksimum fiyata göre filtreliyoruz
  const filteredCars = cars.filter((car) => {
    const matchesBrand = filters.brand ? car.brand.toLowerCase().includes(filters.brand.toLowerCase()) : true;
    const matchesPrice = filters.maxPrice > 0 ? car.price <= filters.maxPrice : true;
    return matchesBrand && matchesPrice;
  });

  return (
    <div>
      <h2>Araba Listesi</h2>
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => <CarItem key={car.id} {...car} />) // Her arabayı CarItem bileşeni ile gösteriyoruz
      ) : (
        <p>Filtrelere uygun araba bulunamadı.</p> // Eğer liste boşsa mesaj gösteriyoruz
      )}
    </div>
  );
};

export default CarList; // Bileşeni dışa aktarıyoruz
