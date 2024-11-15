import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "../../assets/photos/siacomsoft.png";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false); // Controla la visibilidad del logo
  const [hideAnimation, setHideAnimation] = useState(false); // Controla la visibilidad de la animación

  const menuItems = ["Inicio", "Qué hacemos", "Beneficios", "Servicios"];

  // Efecto automático para la transición de la animación
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setHideAnimation(true); // Ocultar animación
      setTimeout(() => {
        setShowLogo(true); // Mostrar logo tras desvanecer la animación
      }, 3500); // Tiempo sincronizado con la duración de la transición
    }, 2000); // Tiempo que tarda la animación en alcanzar el centro

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <Navbar className="fixed w-full bg-transparent rounded-t-lg">
      <NavbarContent className="flex items-center">
        {/* Logo: Solo se muestra cuando `showLogo` es true */}
        <img
          src={logo}
          alt="Logo"
          className={`h-10 mr-4 transform transition-opacity duration-700 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        />
        <NavbarMenuToggle
          aria-label="Toggle menu"
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => {
          const sectionId = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <NavbarMenuItem key={index}>
              <Link
                className="text-zinc-50 hover:text-fuxia transition-colors duration-300 z-50 cursor-pointer"
                href={`#${sectionId}`}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <Button
          as="a"
          href="#contact"
          radius="full"
          className="text-base bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg cursor-pointer z-50"
        >
          Contactarme
        </Button>
      </NavbarContent>

      <NavbarMenu isOpen={false}>
        {menuItems.map((item, index) => {
          const sectionId = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <NavbarMenuItem key={index}>
              <Link
                className="w-full text-zinc-50 hover:text-fuxia transition-colors duration-300 cursor-pointer"
                href={`#${sectionId}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>

      {/* Animación */}
      <div
        id="animation-element"
        className={`fixed top-0 left-0 w-full h-64 bg-transparent transition-opacity duration-700 ${
          hideAnimation ? "opacity-0" : "opacity-100"
        }`}
      >
      </div>
    </Navbar>
  );
};

export default Header;
