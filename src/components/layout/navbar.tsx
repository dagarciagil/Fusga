import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-24 bg-gray-800 text-white p-4 shadow-lg">
      <Link to="/" className="hover:text-blue-400">
        <div className="flex items-center  rounded-full h-16 w-16 bg-amber-50">
          <img className="rounded-full" src=" " alt="Logo FUSGA" />
        </div>
      </Link>
      <ul className="flex gap-6">
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

        {/* este link debe redirigirme a una sección de Home Preguntas frecuentes */}
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
    </nav>
  );
};
