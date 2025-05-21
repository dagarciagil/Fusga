import gradient_bg from "../../../assets/img/gradient-background.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const ComunityH = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center justify-center min-h-screen py-10 overflow-hidden bg-no-repeat bg-sweetPinkC"
    >
      <section className="w-[95%] p-5 gap-y-5 sm:w-[90%] h-auto flex flex-col lg:flex-row items-center justify-center lg:rounded-3xl">

        {/* Contenedor de la información */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 md:py-12 z-10 sm:w-[90%] md:w-[80%] lg:w-[35rem] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 md:p-10"
        >
          <h2 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-white">
            <Typewriter
              words={['Para la comunidad de Fusagasugá']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={4000}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-6 text-sm sm:text-base md:text-lg lg:text-base text-white"
          >
            Nos especializamos en el diseño y desarrollo de estrategias virtuales innovadoras, enfocadas en ayudar a empresas, artistas y proyectos a alcanzar sus metas con éxito. Creamos soluciones digitales personalizadas que impulsan el crecimiento y la visibilidad en el entorno virtual, garantizando resultados efectivos y sostenibles.
          </motion.p>
          <Link to="/comunity">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 2px #000000" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 text-sm text-black bg-white hover:bg-gray-100 sm:text-base rounded-3xl"
            >
              Leer más
            </motion.button>
          </Link>
        </motion.div>

        {/* Contenedor de la imagen */}
        <motion.aside
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 40, y: 41 }}
          viewport={{ once: false, amount: 0.3 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="relative w-full lg:-left-20 sm:w-[90%] md:w-[80%] lg:w-[38rem] h-[16rem] sm:h-[22rem] md:h-[26rem] lg:h-[36rem] rounded-3xl overflow-hidden shadow-slate-500 shadow-2xl"
        >
          <motion.img
            src={gradient_bg}
            alt="Fondo con diseño abstracto"
            className="object-cover w-full h-full"
          />
        </motion.aside>
      </section>
    </motion.article>
  );
};
