import React from "react";
import "./Btn.css";
import {Link} from 'react-router-dom';

export default function Btn() {
  return (
    <div className="btns">
      <Link to="/income"><button className="btn-inc">+ Ingreso</button></Link>
      <Link to="/expense"><button className="btn-exp">- Egreso</button></Link>
      <Link to="/transfer"><button className="btn-trans">= Transferencia</button></Link>
    </div>
  );
}
