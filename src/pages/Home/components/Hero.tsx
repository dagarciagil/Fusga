import iglesia from "../../../assets/img/iglesia.jpg";

export const Hero = () => {
  return (
    <main className="flex justify-center items-center md:py-12">
      <section className="flex flex-col lg:flex-row justify-around items-center w-full md:gap-8 ">
        {/* Contenido textual */}
        <article className="flex flex-col justify-center items-center lg:items-start lg:w-5/12 text-center lg:text-left">
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Innovación tecnológica con Fusga Systems & Technology
            </h1>
          </header>

          <div className="mb-6 w-full">
            <p className="text-sm md:text-base text-gray-700">
              En <strong>FUSGA</strong> nos especializamos en el diseño y
              desarrollo de estrategias virtuales innovadoras, enfocadas en
              ayudar a empresas, artistas y proyectos a alcanzar sus metas con
              éxito. Creamos soluciones digitales personalizadas que impulsan el
              crecimiento y la visibilidad en el entorno virtual, garantizando
              resultados efectivos y sostenibles.
            </p>
          </div>

          <footer className="mt-4">
            <button className="hover:bg-red-500 bg-violet-400 text-white rounded-full h-10 md:h-12 w-48 md:w-64 text-sm md:text-base transition-all duration-300">
              Leer más..
            </button>
          </footer>
        </article>

        {/* Imagen */}
        <aside className="lg:w-4/12 mt-6 lg:mt-0">
          <div className="sm:h-80 md:h-96 lg:h-[500px] xl:h-[40rem] overflow-hidden rounded-lg">
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
