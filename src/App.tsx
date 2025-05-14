import { Layout } from "./components/layout/Layout";

//Rutas de los archivos
import { Home } from "./pages/Home";
import { Comunity } from "./pages/Comunity"
import { Services } from "./pages/Services";
import { About } from "./pages/About";

import { Routes, Route } from "react-router-dom";

// Importa el navbar en todas las paginas del proyecto

export const App = () => { 
  return (
    <>
      {/* EL componente APP solmante sirve para rutear las páginas del proyecto y llama al componente Layout.*/}
      <Layout />

      {/* Las Routes de se encargan de renderizar la información de acuerdo a la url */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />       
      </Routes>
    </>
  );
}

