import { useState } from "react";
import faqImage from "../../../assets/img/faq-image.jpg"; // Cambia según tu ruta real

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
    <section className="bg-white px-4 py-10 flex justify-center items-center min-h-screen">
      <div className="bg-[#e0e7ff] p-10 rounded-lg shadow-xl w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={faqImage}
            alt="Preguntas Frecuentes"
            className="rounded-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Preguntas */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-300"
              >
                <button
                  className="w-full text-left p-4 font-semibold text-gray-800 focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                </button>
                <div
                  className={`px-4 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
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
