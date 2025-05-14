import iglesia from "../assets/img/iglesia.jpg";
import { Suscribe } from "./Suscribe"; 

export const Home = () => {
  return (
    <>
      <main className="flex justify-center items-center h-screen w-screen">
        <section className="flex justify-around items-center h-full w-full">
          <article className="flex flex-col justify-center items-start h-96 w-96">
            <header className="mb-6">
              <h1 className="text-4xl">
                Innovación tecnológica con Fusga Systems & Technology
              </h1>
            </header>
            <div>
              <p>
                En <strong>FUSGA</strong> nos especializamos en el diseño y desarrollo de estrategias
                virtuales innovadoras, enfocadas en ayudar a empresas, artistas
                y proyectos a alcanzar sus metas con éxito. Creamos soluciones
                digitales personalizadas que impulsan el crecimiento y la
                visibilidad en el entorno virtual, garantizando resultados
                efectivos y sostenibles.
              </p>
            </div>
            <footer className="mt-8">
              <button className="hover:bg-red-500 bg-violet-400 rounded-full h-10 w-48 ">
                Leer más..
              </button>
            </footer>
          </article>
          <aside className="flex justify-center items-center h-5/6 w-96">
            <img className="bg-contain h-full w-full" src={iglesia} alt="Empresa FUSGA" />
          </aside>
        </section>
      </main>

      <Suscribe /> 
    </>
  );
};
