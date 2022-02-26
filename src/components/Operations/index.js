import React, { useState } from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import CloseButton from '../CLoseButton/CloseButton';

const Income = () => {
  const [datos, setDatos] = useState({
    concept: "",
    amount: "",
    type: "",
    date: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }
  
  const saveDatos = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(datos);
  }
  return (
    <div className="inc-container">
      <form onSubmit={saveDatos}>
        <div className="container">
          <div className="close-btn">
            <Link to="/"><CloseButton/></Link>
          </div>
          <label htmlFor="">Concepto</label>
          <input
            name="concept"
            type="text"
            placeholder="Ingrese el Concepto"
            onChange={handleInputChange}
          />
        </div>
        <div className="container">
          <label htmlFor="">Monto</label>
          <input
            name="amount"
            type="number"
            placeholder="Ingrese el Monto"
            onChange={handleInputChange}
          />
        </div>
        <div className="container">
          <label htmlFor="">Tipo</label>
          <select name="type" onChange={handleInputChange}>
            <option value="income">Ingreso</option>
            <option value="expense">Egreso</option>
            <option value="transfer">Transferencia</option>
          </select>
        </div>
        <div className="container">
          <label htmlFor="">Fecha</label>
          <input name="date" type="date" onChange={handleInputChange} />
        </div>
        <div className="container">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default Income;