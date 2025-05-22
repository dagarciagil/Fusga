import { ServiceCard } from "../../components/common/ServiceCard";
import fondo2 from "../../assets/img/Generales/fondo2.jpg";

interface ServiceCardProps {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
    bgColor?: string;
    showButton?: boolean;
}

const serviceCardsWebdev: ServiceCardProps[] = [
    {
        id: 1,
        title: "Paginas Web",
        imageSrc: fondo2,
        description: "Crea un nombre en línea para tu empresa y tus clientes, manejamos diseños únicos y muy llamativos.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 2,
        title: "Blogs",
        imageSrc: fondo2,
        description: "Dale a conocer a tu audiencia como desarrollar o crear cosas, en este espacio podrás brindar toda esa información.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 3,
        title: "Tiendas",
        imageSrc: fondo2,
        description: "Comprar nunca será tan fácil como con una tienda virtual, genera pagos al instante y facilita la vida a tus clientes.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 4,
        title: "Ecomerce",
        imageSrc: fondo2,
        description: "Ahí productos que requieren de toda la atención para poder ser vendidos de forma profesional y correcta, este es el espacio.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 5,
        title: "Portafolio",
        imageSrc: fondo2,
        description: "Crea un nombre en línea para tu empresa y tus clientes, manejamos diseños únicos y muy llamativos.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 6,
        title: "Fans Web",
        imageSrc: fondo2,
        description: "Crea un nombre en línea para tu empresa y tus clientes, manejamos diseños únicos y muy llamativos.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 7,
        title: "Informativa",
        imageSrc: fondo2,
        description: "Crea un nombre en línea para tu empresa y tus clientes, manejamos diseños únicos y muy llamativos.",
        bgColor: "bg-white",
        showButton: true
    },
    {
        id: 8,
        title: "Otras",
        imageSrc: fondo2,
        description: "Crea un nombre en línea para tu empresa y tus clientes, manejamos diseños únicos y muy llamativos.",
        bgColor: "bg-white",
        showButton: true
    },
];

export const WebDev = () => {
    return (
        <>
            <section className="flex items-center justify-center py-16 min-h-svh">
                <article className="p-8 pb-10 w-[95%] h-[95%] bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 md:py-12 lg:w-[80%] rounded-3xl">
                    <header className="flex items-center content-center justify-center p-4 mb-6">
                        <div className="flex text-center">
                            <h2 className="gap-1 text-3xl font-bold text-white md:text-4xl 2xl:text-4xl">
                                Servicios de desarrollo web
                            </h2>
                        </div>

                    </header>

                    <section className="grid grid-cols-1 gap-6 p-2 place-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {serviceCardsWebdev.map((card) => (
                            <ServiceCard
                                key={card.id}
                                title={card.title}
                                imageSrc={card.imageSrc}
                                description={card.description}
                                bgColor={card.bgColor}
                                showButton={card.showButton}
                            />
                        ))}
                    </section>
                </article>
            </section>
        </>
    );
};

