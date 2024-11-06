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

const cardData = [
  {
    title: "Programas para Comercios",
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
    description: 
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
  },
  {
    title: "Aplicaciones",
    description:
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
  },
  {
    title: "Programas para Gimnasios",
    description:
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
      {/* Video de fondo */}
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
    backgroundImage: `
      linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))
    `,
  }}
/>


      <section className="h-screen flex justify-center items-center gap-8 text-white">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective rounded-2xl"
          >
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-2xl">
              {/* Parte frontal de la tarjeta con efecto de blur */}
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
        <ModalContent 
          className="bg-white/30 max-w-4xl w-full" // Max-width mayor para más ancho
        >
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center uppercase text-blue-700 font-extrabold">
                {cardData[activeCard].title}
              </ModalHeader>
              <ModalBody className="overflow-y-auto max-h-[60vh]"> {/* Limita la altura y permite scroll */}
                <p>{cardData[activeCard].description}</p>
              </ModalBody>
              <ModalFooter>
                <Button 
                  variant="light" 
                  onPress={onClose} 
                  className="text-blue-700 font-extrabold"
                >
                  Cerrar
                </Button>
                <Button 
                  onPress={onClose} 
                  className="bg-blue-500 text-white hover:bg-blue-400"
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
