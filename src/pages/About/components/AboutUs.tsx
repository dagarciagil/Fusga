export const AboutUs = () => {
  return (
    <section className="tex-greenC">
      {/*AboutUs quienes somos */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purpleC mb-4">
          ¿Quiénes somos?
        </h2>
        <p className="text-base">
          FUSGA es una fundación comprometida con el desarrollo social y
          comunitario de Fusagasugá y sus alrededores. Trabajamos en proyectos
          educativos, culturales y tecnológicos que impactan positivamente a
          nuestra comunidad.
        </p>
      </section>

      {/* mision y vision */}
      <section className=" py-12 px-6">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-purpleC mb-2">Misión</h3>
            <p>
              Promover el desarrollo integral de las personas a través de
              programas educativos, culturales y sociales que mejoren la calidad
              de vida en nuestra comunidad.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purpleC mb-2">Visión</h3>
            <p>
              Ser una organización líder en innovación social, reconocida por su
              impacto positivo en Fusagasugá y la región.
            </p>
          </div>
        </div>
      </section>

      {/* Valores corporativos */}
      <article className="py-12 px-6 max-w-4xl mx-auto">
        <header>
          <h3 className="text-2xl font-bold text-purpleC mb-4">
            Nuestros valores
          </h3>
        </header>
        <ul className="list-disc list-inside space-y-2">
          <li>Compromiso con la comunidad</li>
          <li>Transparencia y honestidad</li>
          <li>Innovación social</li>
          <li>Inclusión y diversidad</li>
          <li>Responsabilidad ambiental</li>
        </ul>
      </article>
    </section>
  );
};
