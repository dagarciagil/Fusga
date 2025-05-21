import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo_Fusga from "../../assets/img/Fusga_logo.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
    <header className="relative z-50 p-4 text-lg font-bold text-white bg-black">
      <nav className="flex items-center justify-start gap-20">
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
          className="ml-auto mr-4 text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
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
            <a href="/#faq-section" className="hover:text-greenC">
               Preguntas frecuentes
            </a>
          </li>
          <li>
            <Link to="/about" className="hover:text-greenC">
              Acerca de
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className="absolute left-0 right-0 overflow-y-auto border-gray-700 shadow-md bg-black md:hidden top-full z-10">
          <ul className="flex flex-col px-4 py-2 text-base text-white">
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
              <a
                href="/#faq-section"
                className="block py-2 hover:text-greenC"
                onClick={toggleMenu}
              >
                Preguntas frecuentes
              </a>

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
        </nav>
      )}
    </header>
  );
};
