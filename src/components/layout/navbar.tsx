import { Link } from "react-router-dom";
import logo_Fusga from "../../assets/img/Fusga_logo.jpg";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-24 bg-gray-800 text-white p-4 ">
      <div className="hover:text-blue-400 flex justify-center items-center rounded-full h-16 w-16 bg-amber-50 ml-6">
        <Link to="/">
          <img className="rounded-full w-full h-full" src={logo_Fusga} alt="FUSGA" />
        </Link>
      </div>
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
