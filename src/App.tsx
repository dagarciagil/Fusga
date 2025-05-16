import { Layout } from "./components/layout/Layout";

//Rutas de los archivos
import { Home } from "./pages/Home/Home";
import { Comunity } from "./pages/Comunity/Comunity"
import { Services } from "./pages/Services/Services";
import { About } from "./pages/About/About";

import { Routes, Route } from "react-router-dom";

// Importa el navbar en todas las paginas del proyecto

export const App = () => { 
  return (
    <>
      <Routes>
        {/* Layout es el componente que contiene el navbar, el footer y el <Outlet /> */}
        <Route path="/" element={<Layout />}>
          {/* Estas son las rutas hijas que se renderizan dentro del <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="comunity" element={<Comunity />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

