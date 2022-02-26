import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

export default function NaviBar() {
  return (
    <div className="topnav">
      <Link as={Link} to={"/"}>Home</Link>
      <Link as={Link} to="/movimientos">Lista de Movimientos</Link>
      {/*
      <a href="#contact">Agenda</a>
      <a href="#about">Cuentas</a>
      <a href="#">Presupuestos</a>
      <a href="#">Reportes por categoría</a>
      <a href="#">Tendencias</a>
      <a href="#">Opciones</a> */}
    </div>
  );
}
