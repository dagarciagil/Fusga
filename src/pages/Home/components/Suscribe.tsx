export const Suscribe = () => {
  return (
      <section className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
        {/* Contenedor*/}
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
          <article className="flex flex-col justify-between items-center space-y-8"> 
            <header className="mb-6 w-full">
              <h2 className="text-4xl font-bold text-center text-gray-800">
                Suscribirse
              </h2>
            </header>
            <div className="mb-8">
              <p className="text-center text-gray-600">
                Suscríbete a nuestro boletín para mantenerte informado sobre las
                últimas novedades, servicios y oportunidades que Fusga tiene para ti.
              </p>
            </div>
            <form className="flex flex-col gap-6">
              <input
                type="email"
                id="email"
                placeholder="ejemplo@correo.com"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <button
                type="submit"
                className="hover:bg-violet-600 bg-violet-400 text-white rounded-full h-12 mt-6"
              >
                Suscribirse
              </button>
            </form>
          </article>
        </div>
      </section>
  );
};
