// src/main.jsx
import React from 'react'; // React'i import ediyoruz
import ReactDOM from 'react-dom/client'; // React DOM kütüphanesini import ediyoruz
import { Provider } from 'react-redux'; // Redux store'u React bileşenlerine bağlamak için Provider kullanıyoruz
import { store } from './app/store'; // Store'u import ediyoruz
import App from './App'; // Uygulamanın ana bileşenini import ediyoruz
import './index.css'; // Stil dosyasını import ediyoruz

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Store'u React uygulamasına bağlıyoruz */}
      <App /> {/* Uygulamanın ana bileşenini render ediyoruz */}
    </Provider>
  </React.StrictMode>
);
