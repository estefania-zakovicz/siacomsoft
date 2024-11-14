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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false); // Estado para el logo
  const menuItems = ["Inicio", "Qué hacemos", "Beneficios", "Servicios"];

  // Manejar el evento de scroll para mostrar el logo
  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section"); // Sí o sí debo tener este id en la segunda sección
      if (secondSection) {
        const sectionPosition = secondSection.getBoundingClientRect().top;
        setShowLogo(sectionPosition <= window.innerHeight / 8); // El numero 8 hace que se muestre el logo cuando la segunda página comienza
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar className="fixed w-full bg-transparent rounded-t-lg">
      <NavbarContent className="flex items-center">
        {/* Logo que se muestra solo cuando `showLogo` es verdadero */}
        {showLogo && <img src={logo} alt="Logo" className="h-10 mr-4" />}

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => {
          // Crear un href dinámico para que apunte a las secciones de la página
          const sectionId = item.toLowerCase().replace(/\s+/g, "-"); // Convertir "Qué hacemos" en "qué-hacemos"
          return (
            <NavbarMenuItem key={index}>
              <Link
                className="text-zinc-50 hover:text-fuxia transition-colors duration-300 cursor-pointer"
                href={`#${sectionId}`} // Enlace a la sección correspondiente
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <Button
          as="a" // Usamos "as" para que el botón actúe como un enlace
          href="#contact" // Redirige al id "contact"
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg cursor-pointer"
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
                href={`#${sectionId}`} // Enlace a la sección correspondiente
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
