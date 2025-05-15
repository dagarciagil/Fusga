import gradient_bg from "../../../assets/img/gradient-background.jpg";
import { Link } from "react-router-dom";

export const ComunityH = () => {
  return (
    // Container principal
    <article className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-no-repeat bg-sweetPinkC">
      <section className="w-[95%] p-5 gap-y-5 sm:w-[90%] h-auto flex flex-col lg:flex-row items-center justify-center lg:rounded-3xl">
        {/* Contenedor de la información */}
        <div className="bg-pinkC w-full z-10 sm:w-[90%] md:w-[80%] lg:w-[35rem] rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-greenC">
            Para la comunidad de Fusagasugá
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-base text-ptextC">
            Nos especializamos en el diseño y desarrollo de estrategias
            virtuales innovadoras, enfocadas en ayudar a empresas, artistas y
            proyectos a alcanzar sus metas con éxito. Creamos soluciones
            digitales personalizadas que impulsan el crecimiento y la
            visibilidad en el entorno virtual, garantizando resultados efectivos
            y sostenibles.
          </p>
          <Link to="/comunity">
            <button className="px-6 py-3 text-sm text-white transition duration-300 bg-greenC hover:bg-purpleC sm:text-base rounded-3xl">
              Leer más
            </button>
          </Link>
        </div>

        {/* Contenedor de la imagen */}
        <aside className="relative w-full lg:-left-20 sm:w-[90%] md:w-[80%] lg:w-[38rem] h-[16rem] sm:h-[22rem] md:h-[26rem] lg:h-[36rem] rounded-3xl overflow-hidden shadow-xl">
          <img
            src={gradient_bg}
            alt="Fondo con diseño abstracto"
            className="object-cover w-full h-full"
          />
        </aside>
      </section>
    </article>
  );
};
