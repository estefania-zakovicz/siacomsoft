import React, { useState, useEffect } from 'react';
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button,
} from "@nextui-org/react";
import logo_siacomsoft from "../assets/photos/logo_fondo_osc.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Función para cambiar el estado de 'scrolled' al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Cambiar '50' si quieres ajustar cuándo se aplica el blur
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    "Inicio",
    "Qué hacemos",
    "Productos",
    "Características",
  ];

  return (
    <Navbar
      /* isBordered={scrolled}  */// Agrega borde solo cuando está scrolleado
      className={`fixed w-full top-0 z-20 transition-colors duration-500 
      }`}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
     
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-zinc-50" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-zinc-50" href="#">
            Qué hacemos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-50" href="#">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-50" href="#">
            Características
          </Link>
        </NavbarItem>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">
          Button
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${
                index === 2 ? "text-zinc-50" : index === menuItems.length - 1 ? "text-fuxia" : "text-zinc-50"
              }`}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
