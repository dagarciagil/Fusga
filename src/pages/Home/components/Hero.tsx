import iglesia from "../../../assets/img/iglesia.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <main className="flex items-center justify-center overflow-hidden bg-pinkC md:py-12">
      <section className="flex flex-col items-center w-full justify-evenly lg:flex-row md:gap-8 ">
        {/* Contenido textual */}
        <article className="flex flex-col items-center justify-center p-10 text-center lg:items-start lg:w-[40%] lg:text-left">
          <header className="">
            <h1 className="text-2xl font-bold text-purpleC sm:text-3xl md:text-4xl">
              Innovación tecnológica con Fusga Systems & Technology
            </h1>
          </header>

          <div className="w-auto my-5">
            <p className="text-sm text-ptextC md:text-base">
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
              <button className="w-48 h-10 text-sm text-white transition-all duration-300 rounded-full hover:bg-greenC bg-purpleC md:h-12 md:w-64 md:text-base">
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
