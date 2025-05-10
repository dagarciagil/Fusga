import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/navbar"; // Importa el navbar en todas las paginas del proyecto


export const App = () => { 
  return (
    <>
      <div>
        {/* Componente de la barra de navegación para cargar en todas las paginas */}
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
