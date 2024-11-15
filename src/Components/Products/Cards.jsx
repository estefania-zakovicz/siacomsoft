import React, { useState } from "react";
import videoCards from "../../assets/videos/video-fondo.mp4";
import "./Cards.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ul } from "framer-motion/client";
/* import blessing from "../../assets/Logos/blessing-top.png";
import mev from "../../assets/Logos/mev-line.png";
import grosoft from "../../assets/Logos/grosoft-line.png";
import optica from "../../assets/Logos/opticasoft.png";
import inecon from "../../assets/Logos/inecon-line.png";
import trading from "../../assets/Logos/trading.png"; */ /*ESTA SECCION HABILITAR CUANDO TENEMOS LOS VIDEOS DE LOS SOFTWARES LISTOS!*/

const cardData = [
  {
    title: "Programas para Comercios",
    /*  image: [
      { src: optica, size: "h-12", url: "https://subdominio1.example.com" },
      { src: mev, size: "h-9", url: "https://subdominio2.example.com" },
      { src: inecon, size: "h-10", url: "https://subdominio3.example.com" }
    ], */ /*ESTA SECCION HABILITAR CUANDO TENEMOS LOS VIDEOS DE LOS SOFTWARES LISTOS!*/
    description: (
      <ul className="h2 list-disc text-left text-xl leading-10 ml-5">
        <li>Gestión de Inventario</li>
        <li>Precios Mayoristas y/o Minoristas</li>
        <li>Lista de Clientes, Revendedores, Proveedores, Empleados</li>
        <li>Control de pago de servicios, gastos extras, ganancias</li>
        <li>Perfiles de Usuarios</li>
        <li>Estadísticas</li>
        <li>Historial de Pagos y Actividad</li>
        <li>Catálogo de Productos y sus Precios</li>
        <li>Seguridad y Privacidad</li>
      </ul>
    ),
  },

  {
    title: "Sitios Webs",
    /*   image: [
      { src: trading, size: "h-12", url: "https://subdominio4.example.com" }
    ], */ /*ESTA SECCION HABILITAR CUANDO TENEMOS LOS VIDEOS DE LOS SOFTWARES LISTOS!*/
    description: (
      <ul className="h2 list-disc text-left text-xl leading-10 ml-5">
        <li>Catálogo de Productos</li>
        <li>Carrito de Compras y Proceso de pago</li>
        <li>Sistema de Usuarios</li>
        <li>Soporte y Atención al Cliente</li>
        <li>Optimización para Dispositivos Móviles</li>
        <li>Gestión de Inventario y Stock</li>
        <li>Sistema de Envíos y Logística</li>
        <li>Marketing y Promociones</li>
        <li>Optimización de SEO y Análisis de Datos</li>
        <li>Seguridad y Cumplimiento</li>
      </ul>
    ),
  },
  {
    title: "Aplicaciones",
    /*  image: [
      { src: blessing, size: "h-14", url: "https://subdominio5.example.com" }
    ], */ /*ESTA SECCION HABILITAR CUANDO TENEMOS LOS VIDEOS DE LOS SOFTWARES LISTOS!*/
    description: (
      <ul className="h2 list-disc text-left text-xl leading-10 ml-5">
        <li>Interfaz de Usuario Atractiva y Amigable</li>
        <li>Catálogo de Productos</li>
        <li>Carrito de Compras y Proceso de Pago Simplificado</li>
        <li>Perfil de Usuario y Gestión de Cuenta</li>
        <li>Notificaciones Push y Alertas Personalizadas</li>
        <li>Soporte al Cliente Integrado</li>
        <li>Experiencia Personalizada con IA y Machine Learning</li>
        <li>Seguimiento de Envíos y Gestión de Pedidos</li>
        <li>Programa de Fidelidad y Recompensas</li>
        <li>Integración con Redes Sociales</li>
        <li>Optimización para Dispositivos Móviles</li>
        <li>Geolocalización y Funciones Basadas en Ubicación</li>
        <li>Opciones de Envío y Logística</li>
        <li>Seguridad y Privacidad</li>
        <li>Análisis de Datos y Reportes</li>
        <li>Feedback y Reseñas de Usuarios</li>
        <li>Soporte Multilenguaje y Multimoneda</li>
        <li>Backend para Gestión Administrativa</li>
      </ul>
    ),
  },
  {
    title: "Programas para Gimnasios",
    /*  image: [
      { src: grosoft, size: "h-8", url: "https://subdominio6.example.com" }
    ], */ /*ESTA SECCION HABILITAR CUANDO TENEMOS LOS VIDEOS DE LOS SOFTWARES LISTOS!*/
    description: (
      <ul className="h2 list-disc text-left text-xl leading-10 ml-5">
        <li>Gestión de Membresías</li>
        <li>Control de Acceso</li>
        <li>Programación de Clases</li>
        <li>Reservas en Línea</li>
        <li>Gestión de Pagos</li>
        <li>Informes y Análisis</li>
        <li>Base de Datos de Clientes</li>
        <li>Seguimiento de Progresos</li>
        <li>Soporte al Cliente</li>
        <li>Aplicación Móvil</li>
        <li>Marketing y Promociones</li>
        <li>Gestión de Personal</li>
        <li>Gestión de Inventario</li>
        <li>Recordatorios Automáticos</li>
        <li>Seguridad y Privacidad</li>
      </ul>
    ),
  },
];

const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeCard, setActiveCard] = useState(null);
  const [backdrop, setBackdrop] = useState("blur");

  const handleOpen = (cardIndex) => {
    setActiveCard(cardIndex);
    onOpen();
  };

  return (
    <div className="relative h-screen w-full object-fill">
      <video
        src={videoCards}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
          linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))`,
        }}
      />
      <h2 className="relative p-20 text-center text-4xl ">
        Nuestros servicios
      </h2>
      <section className="flex justify-center items-center gap-8 text-white">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective rounded-2xl"
          >
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-2xl">
              <div className="absolute backface-hidden w-full h-full rounded-2xl bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-4 p-4 sombra_1">
                <h2 className="text-3xl font-semibold text-center">
                  {card.title}
                </h2>

                <Button
                  variant="flat"
                  onPress={() => handleOpen(index)}
                  className="capitalize bg-blue-600 mt-14"
                >
                  Características
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {activeCard !== null && (
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
          <ModalContent className="bg-white/30 max-w-4xl w-full">
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center uppercase text-blue-700 font-extrabold">
                  {cardData[activeCard].title}
                </ModalHeader>
                <ModalBody className="overflow-y-auto max-h-[60vh]">
                  {cardData[activeCard].description}
                </ModalBody>
                <ModalFooter>
                  {/*   <div className="flex items-center gap-6 mb-4">
                    {cardData[activeCard].image.map((img, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <a href={img.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={img.src}
                            alt={`${cardData[activeCard].title} ${i + 1}`}
                            className={`${img.size} cursor-pointer grayscale brightness-200 hover:brightness-50`}
                          />
                        </a>
                        <span className="text-sm mt-2">{img.subdomain}</span>
                      </div>
                    ))}
                  </div> */} /*ESTA SECCION HABILITAR CUANDO TENEMOS LOS VIDEOS DE LOS SOFTWARES LISTOS!*/
                  
                  <Button
                    as="a"
                    href="#contact"
                    onPress={onClose}
                    className="bg-blue-500 text-white hover:bg-blue-400 ml-4"
                  >
                    Solicitar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Cards;
