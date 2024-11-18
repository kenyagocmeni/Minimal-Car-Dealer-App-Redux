// src/App.jsx
import React from "react"; // React'i import ediyoruz
import CarInput from "./components/CarInput"; // Yeni araba eklemek için CarInput bileşenini import ediyoruz
import CarFilters from "./components/CarFilters"; // Arabaları filtrelemek için CarFilters bileşenini import ediyoruz
import CarList from "./components/CarList"; // Arabaları listelemek için CarList bileşenini import ediyoruz

const App = () => {
  return (
    <div>
      <div>
        <h1>Araba Galerisi</h1> {/* Başlık */}
      </div>
      <div className="app-body-div">
        <CarInput /> {/* Yeni araba ekleme bileşeni */}
        <CarFilters /> {/* Filtreleme bileşeni */}
      </div>
      <CarList /> {/* Araba listesi bileşeni */}
    </div>
  );
};

export default App; // Bileşeni dışa aktarıyoruz
