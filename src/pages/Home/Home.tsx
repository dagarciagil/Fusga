import { Hero } from "./components/Hero"
import { ComunityH } from "./components/Comunity";
import { Faq } from "./components/Faq";
import { ServicesH } from "./components/ServicesH";
import { serviceCardsHome } from "./components/ServicesH";


export const Home = () => {
  return (
    <>
      <Hero />
      <ComunityH />
      <ServicesH serviceCards={serviceCardsHome} />
      <Faq />
    </>
  );
};
