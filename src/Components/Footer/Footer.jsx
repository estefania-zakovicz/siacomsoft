import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import humo from "../../assets/videos/humo.mp4";

export default function Footer() {
  return (
    <div className="relative w-full flex flex-col justify-end items-center">
      {/* Video de fondo */}
      <video
        src={humo}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 w-full object-cover"
      />

      {/* Gradiente de fondo de transparente a negro de abajo hacia arriba */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 10))`,
        }}
      />

      {/* Footer contenido */}
      <footer className=" text-white pt-10 lg:pt-0 lg:pb-10 z-30">
        <div className="container text-center ">
          {/* Sección principal en columnas */}
          <div className="lg:mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-8  md:text-left md:mt-32 md:mx-5">
            {/* Acerca de nosotros */}
            <div className="">
              <h2 className="text-xl lg:ml-10 font-semibold mb-4 lg:text-3xl">Acerca de Nosotros</h2>
              <p className="text-white px-10 lg:text-xl">
                Somos una empresa dedicada a crear soluciones tecnológicas
                innovadoras para negocios de todos los tamaños.
              </p>
            </div>

            {/* Enlaces de navegación */}
            <div className="md:ml-24">
              <h2 className="text-xl font-semibold mt-6 lg:mt-0 lg:mb-4 lg:text-3xl">Enlaces Rápidos</h2>
              <ul className="lg:text-xl">
                <li>
                  <a href="#" className="text-white hover:text-fuxia">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#qué-hacemos" className="text-white hover:text-fuxia">
                    Qué hacemos
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-white hover:text-fuxia">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-white hover:text-fuxia">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-fuxia">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Información de contacto */}
            <div className="lg:ml-20 md:ml-20">
              <h2 className="mt-6 lg:mt-0 text-xl font-semibold lg:mb-4 lg:text-3xl">Contactanos</h2>
              <p className="text-white lg:text-xl">Email: siacomsoft@gmail.com</p>

              <p className="text-white">Teléfonos:</p>

              {/* Número de teléfono 1 */}
              <a
                href="https://wa.me/5493764886867"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-fuxia cursor-pointer"
              >
                +549 376 4886867
              </a>

              {/* Número de teléfono 2 */}
              <a
                href="https://wa.me/5493764390081"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-fuxia cursor-pointer"
              >
                +549 376 4390081
              </a>

              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-fuxia"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-fuxia"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="https://www.instagram.com/siacomsoft?igsh=MXVzMWd3NjRxNHV1NA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-fuxia"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-fuxia"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Derechos reservados */}
          <div className="mt-10 py-2 border-t border-gray-700 lg:pt-6 lg:text-xl text-center text-white font-semibold">
            <p>
              &copy; {new Date().getFullYear()} SiacomSoft. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
