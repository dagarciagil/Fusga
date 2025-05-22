import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo_Fusga from "../../assets/img/Fusga_logo.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const handleServiceClick = () => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
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

          {/* Dropdown de Servicios */}
          <li className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-greenC"
              onClick={toggleServicesDropdown}
              aria-expanded={isServicesDropdownOpen}
            >
              Servicios
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {/* Dropdown menu */}
            {isServicesDropdownOpen && (
              <div className="absolute left-0 z-50 w-48 mt-2 bg-black border border-gray-700 rounded-md shadow-lg top-full">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm transition-colors hover:bg-gray-800 hover:text-greenC"
                      onClick={handleServiceClick}
                    >
                      Servicios Generales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/webdev"
                      className="block px-4 py-2 text-sm transition-colors hover:bg-gray-800 hover:text-greenC"
                      onClick={handleServiceClick}
                    >
                      Desarrollo Web
                    </Link>
                  </li>
                </ul>
              </div>
            )}
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
        <nav className="absolute left-0 right-0 z-10 overflow-y-auto bg-black border-gray-700 shadow-md md:hidden top-full">
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

            {/* Servicios en móvil */}
            <li>
              <button
                className="flex items-center justify-between w-full py-2 hover:text-greenC"
                onClick={toggleMobileServices}
              >
                Servicios
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Submenu móvil */}
              {isMobileServicesOpen && (
                <ul className="mt-1 ml-4 space-y-1">
                  <li>
                    <Link
                      to="/services/general"
                      className="block py-1 text-sm hover:text-greenC"
                      onClick={handleServiceClick}
                    >
                      Servicios Generales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/web-development"
                      className="block py-1 text-sm hover:text-greenC"
                      onClick={handleServiceClick}
                    >
                      Desarrollo Web
                    </Link>
                  </li>
                </ul>
              )}
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
