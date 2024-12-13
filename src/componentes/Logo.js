import React from "react";
import '../hojas-de-estilo/Logo.css';
import freeCodeCamp from '../imagenes/freecodecamp-logo.png';

const Logo = () => (
  <div className='freecodecamp-logo-contenedor'>
    <img
    src={freeCodeCamp}
    className='freecodecamp-logo'
    alt='Logo de freeCodeCamp'/>
  </div>
);

export default Logo;