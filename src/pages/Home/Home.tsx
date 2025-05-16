import { Hero } from "./components/Hero"
import { ComunityH } from "./components/Comunity";
import { Suscribe } from "./components/Suscribe";
import { Faq } from "./components/Faq";
import { ServicesH } from "./components/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <ComunityH />
      <ServicesH />
      <Suscribe />
      <Faq />
    </>
  );
};
