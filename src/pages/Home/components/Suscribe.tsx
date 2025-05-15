export const Suscribe = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full bg-white px-8 sm:px-12">
      {/* Contenedor */}
      <div className="bg-[#e0e7ff] p-6 md:p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <article className="flex flex-col justify-between items-center space-y-8"> 
          <header className="mt-6 mb-6 w-full">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Suscríbete a la bolsa de empleo de Fusagasugá
            </h2>
          </header>
          <div className="w-full">
            <p className="text-center text-gray-600">
              Suscríbete para recibir más información sobre los servicios de Fusga Systems and Technology.
            </p>
          </div>
          <form className="flex flex-col w-full gap-6">
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              type="submit"
              className="hover:bg-violet-600 bg-violet-400 text-white rounded-full h-12 px-6 self-center mb-6"
            >
              Suscribirse
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};
