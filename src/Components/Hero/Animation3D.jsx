import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';


const ScrollReveal = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Sección inicial */}
      <section className="h-screen flex items-center justify-center bg-blue-500">
        <h1 className="text-6xl text-white">Bienvenidos</h1>
      </section>

      {/* Sección que se revela al hacer scroll */}
      <section className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={scrollY > 300 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="bg-white p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl text-gray-800">Nuestra Misión</h2>
          <p className="mt-4 text-gray-600">
            Creamos soluciones innovadoras para mejorar la calidad de vida a través de la tecnología.
          </p>
        </motion.div>
      </section>

      {/* Otra sección de scroll reveal */}
      <section className="min-h-screen bg-green-500 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={scrollY > 1000 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="bg-white p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl text-gray-800">Nuestros Valores</h2>
          <p className="mt-4 text-gray-600">
            Nos enfocamos en la innovación, responsabilidad y el trabajo en equipo.
          </p>
        </motion.div>
      </section>
    </div>
  );
};





export default ScrollReveal;

