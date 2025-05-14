import iglesia from "../../../assets/img/iglesia.jpg";

export const Hero = () => {
  return (
    <main className="flex justify-center bg-pinkC items-center min-h-screen overflow-hidden">
      <section className="flex lg:flex-row justify-around items-center w-full gap-10 lg:gap-24">
        <article className="flex flex-col  justify-center items-center lg:items-start h-96 lg:w-2/5 text-center lg:text-left">
          <header className="mb-6">
            <h1 className="text-3xl text-purpleC md:text-4xl lg:text-5xl font-bold">
              Innovación tecnológica con Fusga Systems & Technology
            </h1>
          </header>
          <div className="mb-8 px-4 sm:px-0">
            <p className="text-sm md:text-base lg:text-lg text-purpleC">
              En <strong>FUSGA</strong> nos especializamos en el diseño y
              desarrollo de estrategias virtuales innovadoras, enfocadas en
              ayudar a empresas, artistas y proyectos a alcanzar sus metas con
              éxito. Creamos soluciones digitales personalizadas que impulsan el
              crecimiento y la visibilidad en el entorno virtual, garantizando
              resultados efectivos y sostenibles.
            </p>
          </div>
          <footer className="mt-8">
            <button className="hover:bg-greenC bg-purpleC text-white rounded-full h-12 w-64 transition-all duration-300">
              Leer más..
            </button>
          </footer>
        </article>

        <aside className="flex justify-center items-center w-full lg:w-[40rem] lg:h-[42rem]">
          <img
            className="object-cover w-full h-full"
            src={iglesia}
            alt="Empresa FUSGA"
          />
        </aside>
      </section>
    </main>
  );
};
