import { Hero } from "./components/Hero"
import { ComunityH } from "./components/Comunity";
import { Faq } from "./components/Faq";
import { ServicesH } from "./components/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <ComunityH />
      <ServicesH />      
      <Faq />
    </>
  );
};
