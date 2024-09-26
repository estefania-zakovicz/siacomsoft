import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import logo_siacomsoft from "../assets/photos/logo_fondo_osc.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inicio",
    "Proyectos",
    "Cotizaciones",
    "Contacto",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo_siacomsoft} alt="SiacomSoft Logo" className="h-8" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-zinc-50" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-zinc-50" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-50" href="#">
            Cotizaciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-50" href="#">
            Contacto
          </Link>
        </NavbarItem>
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
