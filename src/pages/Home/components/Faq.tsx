import { useState } from "react";
import faqImage from "../../../assets/img/Home/faq-image.jpg";

export const Faq = () => {
  const faqs = [
    {
      question: "¿Qué es Fusga Systems and Technology?",
      answer:
        "Es una plataforma dedicada a brindar soluciones tecnológicas, bolsa de empleo y servicios digitales para la comunidad de Fusagasugá.",
    },
    {
      question: "¿Cómo puedo registrarme para recibir información?",
      answer:
        "Puedes suscribirte dejando tu correo en la sección de suscripción o contactarnos directamente.",
    },
    {
      question: "¿La suscripción tiene algún costo?",
      answer: "No, suscribirte es totalmente gratuito.",
    },
    {
      question: "¿Qué tipo de oportunidades publican?",
      answer:
        "Publicamos vacantes laborales locales, eventos de formación y servicios tecnológicos disponibles.",
    },
    {
      question: "¿Puedo ofrecer mis servicios en la plataforma?",
      answer:
        "Sí, contáctanos para registrar tu perfil y ofrecer tus servicios.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white md:py-12 font-marcellus" id="faq-section">
      
      <div className="flex flex-col w-full max-w-6xl gap-8 p-10 text-white shadow-xl bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 rounded-3xl md:flex-row">
        {/* Imagen */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            src={faqImage}
            alt="Preguntas Frecuentes"
            className="object-cover w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Preguntas */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="text-purple-900 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm bg-whiteC"
              >
                <button
                  className="w-full p-4 font-semibold text-left focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                </button>
                <div
                  className={`px-4 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 py-4" : "max-h-0 py-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
