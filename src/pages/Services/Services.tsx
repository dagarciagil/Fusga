import { ServicesH } from "../Home/components/ServicesH";
import { serviceCardsHome } from "../Home/components/ServicesH";
import fondo4 from "../../assets/img/Generales/fondo4.jpg";
import fondo5 from "../../assets/img/Generales/fondo5.jpg";
import fondo6 from "../../assets/img/Generales/fondo6.jpg";

export const Services = () => {
  const serviceCardsFull = [
    ...serviceCardsHome,
    {
      id: 4,
      title: "Diseño Grafico",
      imageSrc: fondo4,
      description: "Creamos esos diseños que tanto anhelas para tu proyecto.",
      bgColor: "bg-white",
    },
    {
      id: 5,
      title: "Cursos",
      imageSrc: fondo5,
      description: "Aprende con los mejores profesores y destaca en el área.",
      bgColor: "bg-white",
    },
    {
      id: 6,
      title: "Otros",
      imageSrc: fondo6,
      description: "Conoce más sobre lo que hacemos y únete a nuestra comunidad.",
      bgColor: "bg-white",
    },
  ];

  return <ServicesH serviceCards={serviceCardsFull} showButtons={true} />;
};
