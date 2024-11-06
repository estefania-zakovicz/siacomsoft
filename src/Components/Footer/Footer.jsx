import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-10 pt-32">
      <div className="container mx-auto px-6">
        {/* Sección principal en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center  md:text-left">
          
          {/* Acerca de nosotros */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Acerca de Nosotros</h2>
            <p className="text-gray-400">
              Somos una empresa dedicada a crear soluciones tecnológicas innovadoras para negocios de todos los tamaños.
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Enlaces Rápidos</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Qué hacemos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Beneficios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
            <p className="text-gray-400">Email: siacomsoft@gmail.com</p>
            <p className="text-gray-400">Teléfono: +549 376 4886867<br/>+549 376 4390081</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SiacomSoft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
