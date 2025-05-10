import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">
            Acerca
          </Link>
        </li>
      </ul>
    </nav>
  );
};
