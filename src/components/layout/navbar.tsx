import { Link } from "react-router-dom";
import logo_Fusga from "../../assets/img/Fusga_logo.jpg";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-24 bg-pinkC text-purpleC text-lg font-medium p-8 pb-0 ">
      <div className="hover:text-blue-400 flex justify-center items-center rounded-full h-[4.5rem] w-[4.5rem] bg-amber-50 ml-6">
        <Link to="/">
          <img className="rounded-full" src={logo_Fusga} alt="FUSGA" />
        </Link>
      </div>
      <ul className="flex gap-6">
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

        {/* este link debe redirigirme a una sección de Home Preguntas frecuentes */}
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
    </nav>
  );
};
