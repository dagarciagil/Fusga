import { Link } from "react-router-dom";
import { ServiceCard } from "../../../components/common/ServiceCard";
import fondo1 from "../../../assets/img/Generales/fondo1.jpg";
import fondo2 from "../../../assets/img/Generales/fondo2.jpg";
import fondo3 from "../../../assets/img/Generales/fondo3.jpg";

interface ServiceCardProps {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  bgColor?: string;
}

export const serviceCardsHome: ServiceCardProps[] = [
  {
    id: 1,
    title: "Desarrollo Web",
    imageSrc: fondo1,
    description: "Te ayudamos a crear ese espacio en línea que tanto deseas.",
    bgColor: "bg-white",
  },
  {
    id: 2,
    title: "Posicionamiento SEO",
    imageSrc: fondo2,
    description: "Consigue que tu sitio web domine en los buscadores.",
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "Marketing Digital",
    imageSrc: fondo3,
    description: "Generamos estrategias que te ayuden a conseguir resultados.",
    bgColor: "bg-white",
  },
];

interface ServicesHProps {
  serviceCards: ServiceCardProps[];
  showButtons?: boolean;
}

export const ServicesH = ({ serviceCards, showButtons = false }: ServicesHProps) => {
    return (
        <section className="flex items-center justify-center py-16 min-h-svh">
            <article className="p-8 pb-10 w-[95%] h-[95%] bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 md:py-12 lg:w-[80%] rounded-3xl">
                <header className="flex justify-around p-4 mb-6 sm:gap-none md:justify-between lg:justify-between">
                    <div>
                        <h2 className="gap-1 text-3xl font-bold text-white md:text-4xl 2xl:text-4xl">
                            Servicios
                        </h2>
                    </div>
                    {!showButtons && (
                        <div>
                            <Link to="/services">
                                <button className="px-6 py-3 text-sm text-black bg-white hover:bg-gray-100 sm:text-base rounded-3xl">
                                    Ver más
                                </button>
                            </Link>
                        </div>
                    )}
                </header>

                <section className="grid grid-cols-1 gap-6 p-2 place-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {serviceCards.map((card, index) => (
                        <ServiceCard
                            key={card.id}
                            title={card.title}
                            imageSrc={card.imageSrc}
                            description={card.description}
                            bgColor={card.bgColor}
                            showButton={showButtons && index === 0}
                        />
                    ))}
                </section>
            </article>
        </section>
    );
};
