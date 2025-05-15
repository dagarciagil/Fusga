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
    <nav className="bg-gray-800 text-white p-4 relative z-50">
      <div className="flex items-center justify-start gap-20">
        {/* Logo */}
        <div className="hover:text-blue-400 flex justify-center items-center rounded-full h-12 w-12 sm:h-16 sm:w-16 bg-amber-50 ml-10">
          <Link to="/">
            <img
              className="rounded-full w-full h-full"
              src={logo_Fusga}
              alt="FUSGA"
            />
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white ml-auto mr-4"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {/* Si el menu esta abierto muestra la X con las rutas, sino muestra el menu hamburguesa */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en escritorio */}
        <ul className="hidden md:flex gap-10">
          <li>
            <Link to="/comunity" className="hover:text-blue-400">
              Comunidad
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-blue-400">
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú móvil (visible solo si está abierto) si isMenuOpen es true muestra el menú y cambia a la X */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-md z-1 overflow-y-auto">
          <ul className="flex flex-col py-2 px-4 text-base">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-blue-400"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/comunity"
                className="block py-2 hover:text-blue-400"
                onClick={toggleMenu}
              >
                Comunidad
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 hover:text-blue-400"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block py-2 hover:text-blue-400"
                onClick={toggleMenu}
              >
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 hover:text-blue-400"
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