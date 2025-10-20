import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">Tienda Mágica</h2>

      <ul className="navbar-categories">
        <li><a href="inicio">Inicio</a></li>
        <li><a href="#varitas">Varitas</a></li>
        <li><a href="#libros">Libros</a></li>
        <li><a href="#indumentaria">Indumentaria</a></li>
        <li><a href="#accesorios">Accesorios</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
