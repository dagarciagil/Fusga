import { Link } from "react-router-dom";
import { ServiceCard } from "./ServiceCard"; // Ajusta la ruta según donde crees el componente
import fondo1 from "../../../assets/img/fondo1.jpg";
import fondo2 from "../../../assets/img/fondo2.jpg";
import fondo3 from "../../../assets/img/fondo3.jpg";


export const ServicesH = () => {
    // Define los datos de tus tarjetas
    const serviceCards = [
        {
            id: 1,
            title: "Desarrollo Web",
            imageSrc: fondo1,
            description: "Te ayudamos a crear ese espacio en línea que tanto deseas",
            bgColor: "bg-white"
        },
        {
            id: 2,
            title: "Posicionamiento SEO",
            imageSrc: fondo2,
            description: "Consigue que tu sitio web domine en los buscadores.",
            bgColor: "bg-white"
        },
        {
            id: 3,
            title: "Marketing Digital",
            imageSrc: fondo3,
            description: "Generamos estrategias que te ayuden a conseguir resultados.",
            bgColor: "bg-white"
        }
    ];

    return (
        <>
            {/* Contenedor principal */}
            <section className="flex items-center justify-center py-16 min-h-svh">
                <article className="p-4 w-[95%] h-[95%] bg-pinkC rounded-lg shadow-md lg:w-[80%]">
                    <header className="flex justify-around p-4 mb-6 sm:gap-none md:justify-between lg:justify-between 2xl:justify-around 2xl:gap-[68rem]">
                        <div>
                            <h2 className="gap-1 text-3xl font-bold text-purpleC md:text-4xl 2xl:text-4xl">Servicios</h2>
                        </div>
                        <div>
                            <Link to="/services">
                                <button className="px-4 py-2 text-lg transition-colors rounded-lg text-ptextC bg-sweetPinkC hover:bg-purpleC hover:text-whiteC">
                                    Ver más
                                </button>
                            </Link>
                        </div>
                    </header>
                    <section className="grid grid-cols-1 gap-6 p-2 place-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:">
                        {serviceCards.map(card => (
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
        </>
    );
};