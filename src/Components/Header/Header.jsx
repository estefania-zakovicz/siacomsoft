import React, { useState } from 'react';
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Inicio", "Qué hacemos", "Productos", "Características"];

  return (
    <Navbar className="fixed w-full top-5 z-20 bg-transparent rounded-t-lg">
      <NavbarContent>
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          className="sm:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="text-zinc-50" href="#">{item}</Link>
          </NavbarMenuItem>
        ))}
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">
          Contactarme
        </Button>
      </NavbarContent>
      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full text-zinc-50" href="#" size="lg">{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
