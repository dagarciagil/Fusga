import { StrictMode } from 'react'
import './assets/styles/app.css'
import ReactDOM from "react-dom/client";
import {App} from "./App.tsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);