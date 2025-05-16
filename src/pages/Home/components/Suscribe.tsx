export const Suscribe = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen px-8 sm:px-12 bg-pinkC font-marcellus text-greenC">
      {/* Contenedor */}
      <div className="bg-[#e0e7ff] p-6 md:p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <article className="flex flex-col items-center justify-between space-y-8">
          <header className="w-full mt-6 mb-6">
            <h2 className="text-4xl font-bold text-center">
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
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              type="submit"
              className="self-center h-12 px-6 mb-6 text-white rounded-full hover:bg-violet-600 bg-violet-400"
            >
              Suscribirse
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};
