import gradient_bg from "../../../assets/img/gradient-background.jpg";
import { Link } from "react-router-dom";


export const ComunityH = () => {
  return (
    // Container principal
    <article className="flex flex-col min-h-screen items-center justify-center bg-neutral-400 overflow-hidden bg-no-repeat">
      <section className="w-[95%] sm:w-[90%] h-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 rounded-3xl">

        {/* Contenedor de la información */}
        <div className="bg-pinkC w-full sm:w-[90%] md:w-[80%] lg:w-[35rem] rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-greenC">
            Para la comunidad de Fusagasugá
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-base mb-6 text-greenC">
            Nos especializamos en el diseño y desarrollo de estrategias virtuales innovadoras, enfocadas en ayudar a empresas, artistas y proyectos a alcanzar sus metas con éxito. Creamos soluciones digitales personalizadas que impulsan el crecimiento y la visibilidad en el entorno virtual, garantizando resultados efectivos y sostenibles.
          </p>
          <Link to="/comunity">
            <button className="bg-greenC hover:bg-purpleC text-white text-sm sm:text-base py-3 px-6 rounded-3xl transition duration-300">
              Leer más
            </button>
          </Link>
        </div>

        {/* Contenedor de la imagen */}
        <aside className="w-full sm:w-[90%] md:w-[80%] lg:w-[38rem] h-[16rem] sm:h-[22rem] md:h-[26rem] lg:h-[36rem] rounded-3xl overflow-hidden shadow-xl">
          <img
            src={gradient_bg}
            alt="Fondo con diseño abstracto"
            className="w-full h-full object-cover"
          />
        </aside>

      </section>
    </article> 
  );
};
