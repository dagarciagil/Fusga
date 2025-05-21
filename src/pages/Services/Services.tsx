import { ServiceCard } from "../../components/common/ServiceCard"; // Ajusta la ruta según donde crees el componente
import { serviceCards } from "../Home/components/Services";
import fondo4 from "../../assets/img/fondo4.jpg";
import fondo5 from "../../assets/img/fondo5.jpg";
import fondo6 from "../../assets/img/fondo6.jpg";

export const Services = () => {
  const serviceCardsFull = [
    ...serviceCards,
    {
      id: 4,
      title: "Diseño UX/UI",
      imageSrc: fondo4,
      description: "Creamos interfaces intuitivas y atractivas para tus usuarios.",
      bgColor: "bg-white",
    },
    {
      id: 5,
      title: "Desarrollo de Apps",
      imageSrc: fondo5,
      description: "Llevamos tu negocio al siguiente nivel con aplicaciones móviles.",
      bgColor: "bg-white",
    },
    {
      id: 6,
      title: "Social Media",
      imageSrc: fondo6,
      description: "Gestionamos tus redes sociales para alcanzar a tu audiencia ideal.",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="flex items-center justify-center py-16 min-h-svh">
      <article className="p-8 pb-10 w-[95%] h-[95%] bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 md:py-12 shadow-lg lg:w-[80%] rounded-3xl">
        <header className="flex justify-around p-4 mb-6 sm:gap-none">
          <div>
            <h2 className="gap-1 text-3xl font-bold text-white md:text-4xl 2xl:text-4xl">
              Servicios
            </h2>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-6 p-2 place-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {serviceCardsFull.map((card) => (
            <ServiceCard
              key={card.id}
              title={card.title}
              imageSrc={card.imageSrc}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </section>
      </article>
    </section>
  );
};
