export const Comunity = () => {
  return (
    <>
      <section className="relative h-auto py-10 md:h-screen lg:h-screen 3xl:h-screen">
        {/* Elementos decorativos de fondo */}
        <section className="h-[95%] flex flex-col items-center justify-center gap-4 px-4 relative z-10">
          <div data-aos="fade-down" className="max-w-2xl mx-auto text-center">
            <h1 className="relative flex items-center justify-center pt-10 pb-5 text-3xl font-bold">
              Para la comunidad de Fusagasugá
              <span className="absolute w-40 h-1 mb-3 transform -translate-x-1/2 rounded-full -bottom-1 left-1/2 bg-gradient-to-r from-teal-200 to-purple-300"></span>
            </h1>
            <p className="flex items-center justify-center mb-12">
              Aquí va la breve descripción de los dos servicios para la comunidad de Fusagasugá.
            </p>
          </div>

          {/* Panel de Bolsa de empleo */}
          <section className="grid grid-cols-1 gap-5 mb-16 md:place-items-center md:place-content-center lg:grid-cols-2 lg:w-[80%] lg:gap-0 3xl:w-[80%]">
            <section className="flex flex-col justify-center w-full h-64 md:w-[80%] md:h-[20rem] md:p-10 lg:flex-row lg:w-[95%] 3xl:w-[90%] 3xl:h-[25rem] p-6 overflow-hidden rounded-lg bg-colorCard relative group transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50">
              {/* Elemento decorativo */}
              <div className="absolute w-32 h-32 transition-all duration-500 rounded-full -bottom-10 -right-10 bg-white/10 group-hover:-bottom-5 group-hover:-right-5"></div>

              <div className="relative z-10 mt-auto">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-purpleC" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h2 className="text-2xl font-bold">Bolsa de empleo</h2>
                </div>
                <p className="mb-4 text-sm">
                  En FUSGA systems and Technology estamos comprometidos con el crecimiento de Fusagasugá.
                </p>
                <div className="flex items-center gap-2">
                  <button className="flex items-center px-4 py-2 text-sm text-white transition-transform duration-300 bg-black rounded-md hover:scale-105">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center p-2 text-white transition-transform duration-300 bg-black rounded-full hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Panel de Turismo */}
            <section className="flex flex-col justify-center w-full h-64 md:w-[80%] md:h-[20rem] md:p-10 lg:flex-row lg:w-[95%] 3xl:w-[90%] 3xl:h-[25rem] p-6 overflow-hidden rounded-lg bg-colorCard relative group transition-all duration-300 hover:shadow-lg hover:shadow-teal-300/50">
              {/* Elemento decorativo */}
              <div className="absolute w-32 h-32 transition-all duration-500 rounded-full -top-10 -left-10 bg-white/10 group-hover:-top-5 group-hover:-left-5"></div>

              <div className="relative z-10 mt-auto">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-greenC" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold">Turismo Fusagasugá</h2>
                </div>
                <p className="mb-4 text-sm">
                  Conoce los hermosos sitios que ofrece Fusagasugá y los excelentes planes que tenemos para ti.
                </p>
                <div className="flex items-center gap-2">
                  <button className="flex items-center px-4 py-2 text-sm text-white transition-transform duration-300 bg-black rounded-md hover:scale-105">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center p-2 text-white transition-transform duration-300 bg-black rounded-full hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};