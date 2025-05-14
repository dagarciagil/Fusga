export const ComunityH = () => {
  return (
    <article className="h-screen content-center bg-slate-300 overflow-hidden bg-no-repeat lg:h-screen">
      <section className="relative py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex justify-between flex-row relative bg-indigo-100 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="relative z-10 w-[30rem] bg-slate-300 rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Para la comunidad de Fusagasugá
            </h2>

            <p className="text-sm md:text-base text-gray-700 mb-6">
              Nos especializamos en el diseño y desarrollo de estrategias
              virtuales innovadoras, enfocadas en ayudar a empresas, artistas y
              proyectos a alcanzar sus metas con éxito. Creamos soluciones
              digitales personalizadas que impulsan el crecimiento y la
              visibilidad en el entorno virtual, garantizando resultados
              efectivos y sostenibles.
            </p>

            <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 px-4 rounded-md transition duration-300">
              Leer más
            </button>
          </div>

          <aside className="absolute top-7 left-[30rem] w-[35rem] h-[27rem] rounded-3xl bg-slate-400 overflow-hidden md:block">
            <img src="" alt="Aquí va la imagen" />
          </aside>
        </div>
      </section>
    </article>
  );
};
