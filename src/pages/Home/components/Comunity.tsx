import gradient_bg from "../../../assets/img/gradient-background.jpg";

export const ComunityH = () => {
  return (
    // Container principal
    <article className="flex h-screen content-center items-center justify-center bg-sweetPinkC overflow-hidden bg-no-repeat lg:h-screen">
      <section className="relative w-[80%] h-[90%] flex justify-center items-center content-center flex-row rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Contenedor de la información */}
        <div className="flex flex-col justify-center -left-[20rem] items-start relative z-10 w-[33rem] h-[30rem] bg-pinkC rounded-3xl p-8 shadow-lg md:p-10 ml-10">
          {/* Título */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-greenC">
            Para la comunidad de Fusagasugá
          </h2>
          {/* Descripción */}
          <p className="text-sm text-greenC md:text-base mb-6 sm:text-base lg xl">
            Nos especializamos en el diseño y desarrollo de estrategias
            virtuales innovadoras, enfocadas en ayudar a empresas, artistas y
            proyectos a alcanzar sus metas con éxito. Creamos soluciones
            digitales personalizadas que impulsan el crecimiento y la
            visibilidad en el entorno virtual, garantizando resultados
            efectivos y sostenibles.
          </p>
          <button type="button" className="bg-greenC hover:bg-purpleC text-white text-sm py-3 px-6 rounded-3xl transition duration-300">
            Leer más
          </button>
        </div>
        {/* Contenedor de la imagen al lado derecho */}
        <aside className="absolute left-[32rem] w-[40rem] h-[34rem] shadow-lg rounded-3xl bg-transparent overflow-hidden 2xl:left-[40rem]">
          <img src={gradient_bg} alt="Aquí va la imagen" className="w-full h-full object-fill" />
        </aside>
      </section>
    </article>
  );
};
