import { StrictMode } from 'react'
import './assets/styles/app.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Estilos de tailwind
import './assets/styles/Talwind.css'

//Componente de rutas
import {App} from "./App.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);