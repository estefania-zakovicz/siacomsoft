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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el menú hamburguesa

  const menuItems = ["Inicio", "Qué hacemos", "Beneficios", "Servicios"];

  // Efecto automático para la transición de la animación en pantallas grandes
  useEffect(() => {
    if (window.innerWidth > 640) { // Revisa si la pantalla es más grande que 640px (Tailwind sm: breakpoint)
      const animationTimeout = setTimeout(() => {
        setHideAnimation(true); // Ocultar animación
        setTimeout(() => {
          setShowLogo(true); // Mostrar logo tras desvanecer la animación
        }, 3500); // Tiempo sincronizado con la duración de la transición
      }, 2000); // Tiempo que tarda la animación en alcanzar el centro

      return () => clearTimeout(animationTimeout);
    } else {
      // Mostrar logo directamente en pantallas pequeñas
      setShowLogo(true);
    }
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <Navbar className="fixed w-full bg-transparent rounded-t-lg z-50 ">
      <NavbarContent className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className={`h-10 mr-4 lg:h-12 lg:mt-1 2xl:h-12 2xl:mt-2 transform transition-opacity duration-700 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        />
        <NavbarMenuToggle
          aria-label="Toggle menu"
          onClick={handleMenuToggle}
          className="sm:hidden cursor-pointer text-zinc-50"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 sm:gap-4 lg:gap-6 " justify="center">
        {menuItems.map((item, index) => {
          const sectionId = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <NavbarMenuItem key={index}>
              <Link
                className="text-zinc-50 hover:text-fuxia transition-colors duration-300 z-50 cursor-pointer lg:text-xl xl:text-xl 2xl:text-xl"
                href={`#${sectionId}`}
                onClick={() => handleLinkClick(sectionId)}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <Button
          as="a"
          onClick={() => handleLinkClick("contact")}
          radius="full"
          className="text-base bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg cursor-pointer z-50 sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl"
        >
          Contactarme
        </Button>
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => {
          const sectionId = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <NavbarMenuItem key={index}>
              <Link
                className="w-full text-zinc-50 hover:text-fuxia transition-colors duration-300 cursor-pointer"
                href={`#${sectionId}`}
                size="lg"
                onClick={() => handleLinkClick(sectionId)}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <Link
            className="w-full text-zinc-50 hover:text-fuxia transition-colors duration-300 cursor-pointer"
            href="#contact"
            size="lg"
            onClick={() => handleLinkClick("contact")}
          >
            <span className="text-base bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg py-2 px-4 rounded-full">
              Contactarme
            </span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      {/* Animación del logo: Solo en pantallas grandes */}
      <div
        id="animation-element"
        className={`fixed top-0 left-0 w-full  bg-transparent transition-opacity duration-700 hidden sm:block ${
          hideAnimation ? "opacity-0" : "opacity-100"
        }`}
      >
      </div>
    </Navbar>
  );
};

export default Header;
