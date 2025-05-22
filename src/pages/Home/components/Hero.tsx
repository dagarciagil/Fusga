import iglesia from "../../../assets/img/Home/iglesia.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <main className="flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 md:py-12">
      <section className="flex flex-col items-center w-full justify-evenly lg:flex-row md:gap-8">
        {/* Contenido textual */}
        <article
          className="flex flex-col items-center justify-center p-10 text-center lg:items-start lg:w-[40%] lg:text-left
            bg-white rounded-lg
          "
        >
          <header>
            <h1 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Innovación tecnológica con
              <a
                href="/"
                // target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-teal-200 after:to-purple-300 after:transition-all after:duration-500 hover:after:w-full"
              >
                Fusga Systems & Technology
              </a>
              <br />
            </h1>
          </header>

          <div className="w-auto my-5">
            <p className="text-sm text-black md:text-base">
              En <strong>FUSGA</strong> nos especializamos en el diseño y
              desarrollo de estrategias virtuales innovadoras, enfocadas en
              ayudar a empresas, artistas y proyectos a alcanzar sus metas con
              éxito. Creamos soluciones digitales personalizadas que impulsan el
              crecimiento y la visibilidad en el entorno virtual, garantizando
              resultados efectivos y sostenibles.
            </p>
          </div>

          <footer className="mt-4">
            <Link to="/about">
              <button className="bg-purpleDarkC text-white px-4 py-2 rounded-md font-semibold hover:bg-[#3A006A]">
                Leer más..
              </button>
            </Link>
          </footer>
        </article>

        {/* Imagen */}
        <aside className="m-5 lg:w-4/12 lg:mt-0">
          <div className="shadow-purpleC shadow-lg sm:h-80 lg:h-[500px] xl:h-[40rem] overflow-hidden rounded-lg">
            <img
              className="object-cover w-full h-full"
              src={iglesia}
              alt="Empresa FUSGA"
            />
          </div>
        </aside>
      </section>
    </main>
  );
};
