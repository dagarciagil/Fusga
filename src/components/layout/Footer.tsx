import logo_Fusga from "../../assets/img/Fusga_logo.jpg";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-pinkC text-ptextC pt-10 pb-6 px-6 md:px-16">
      <section className="flex flex-col md:flex-row justify-between items-start  border-b border-gray-700 pb-8">
        {/* Logo y descripción */}
        <article className="flex flex-col items-start">
          <img
            src={logo_Fusga}
            alt="FUSGA Logo"
            className="h-16 w-16 rounded-full mb-3"
          />
          <p className="text-sm text-purpleC">Fusga Systems & Technology</p>
        </article>

        {/* Contacto */}
        <article>
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <ul className="space-y-1 text-sm text-purpleC">
            <li className="flex items-center gap-2">
              <Mail size={16} /> contacto@fusga.edu.co
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +57 1 234 5678
            </li>
          </ul>
        </article>
        {/* Redes sociales */}
        <article>
          <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
          <div className="flex items-center gap-4 text-purpleC">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <Instagram />
            </a>
          </div>
        </article>
      </section>

      {/* Derechos de autor */}
      <div className="text-center text-sm text-ptextC mt-6">
        &copy; {new Date().getFullYear()} FUSGA. Todos los derechos reservados.
      </div>
    </footer>
  );
};
