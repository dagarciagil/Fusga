import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo_Fusga from "../../assets/img/Fusga_logo.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 p-4 text-lg font-bold text-purpleC bg-pinkC">
      <div className="flex items-center justify-start gap-20">
        {/* Logo */}
        <div className="flex items-center justify-center w-16 h-16 ml-10 bg-black rounded-full sm:h-16 sm:w-16">
          <Link to="/">
            <img
              className="w-full h-full rounded-full"
              src={logo_Fusga}
              alt="FUSGA"
            />
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="ml-auto mr-4 text-purpleC md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {/* Si el menu esta abierto muestra la X con las rutas, sino muestra el menu hamburguesa */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en escritorio */}
        <ul className="hidden gap-10 md:flex">
          <li>
            <Link to="/comunity" className="hover:text-greenC">
              Comunidad
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-greenC">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-greenC">
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-greenC">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú móvil (visible solo si está abierto) si isMenuOpen es true muestra el menú y cambia a la X */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 overflow-y-auto border-gray-700 shadow-md bg-pinkC md:hidden top-full z-1">
          <ul className="flex flex-col px-4 py-2 text-base">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-greenC"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/comunity"
                className="block py-2 hover:text-greenC"
                onClick={toggleMenu}
              >
                Comunidad
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 hover:text-greenC"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block py-2 hover:text-greenC"
                onClick={toggleMenu}
              >
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 hover:text-greenC"
                onClick={toggleMenu}
              >
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};