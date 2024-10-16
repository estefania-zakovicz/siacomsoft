import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";
import backgroundVideo from "../../assets/videos/video-6.mp4";
/* import logo_siacomsoft from "../assets/photos/logo_fondo_osc.png"; */

{/* <h1 className="text-blue-950">
Desarrollamos programas, sitios web y aplicaciones que simplifican la administración diaria de tu empresa, 
para que puedas concentrarte en crecer.
</h1> */}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["Inicio", "Qué hacemos", "Productos", "Características"];

  return (
    <Navbar className="fixed w-full top-0 z-20 bg-transparent rounded-t-lg ">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link className="text-zinc-50" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">
          Contactarme
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full text-zinc-50" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

const Hero_animation = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video de fondo */}
      <video className="absolute left-0 w-full h-full object-cover" src={backgroundVideo} autoPlay loop muted playsInline />

      {/* Cuadro con blur y contenido superpuesto */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="blur-container bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-16 shadow-lg min-h-[80vh] w-[85%]">
          {/* Header */}
          <Header />

          {/* Contenido central */}
          <motion.div
            className="flex flex-col items-center h-full mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            {/* Imágenes de SIACOM */}
            <div className="flex items-center space-x-4 mb-8">
              <motion.img
                src={icono_fondo_oscuro}
                alt="Icono fondo oscuro"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 30, damping: 20 }}
                className="w-20"
              />
              <div className="flex flex-col items-center">
                <motion.img
                  src={siacom_blanco}
                  alt="Siacom blanco"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 20,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="w-auto h-20"
                />
                <motion.img
                  src={descriptor_blanco}
                  alt="Desarrollo de Software"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 20,
                    damping: 20,
                    delay: 0.4,
                  }}
                  className="self-end w-auto h-8 mt-1"
                />
              </div>
            </div>

            {/* Texto debajo de las imágenes */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white text-center text-2xl font-semibold"
            >
              Transformamos la gestión de tu negocio con soluciones digitales eficientes.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero_animation;
