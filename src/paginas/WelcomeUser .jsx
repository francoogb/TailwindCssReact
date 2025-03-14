import React from 'react'
import DatePicker from 'react-date-picker';

const WelcomeUser = ({nombre, user = "Default", children}) => {
  let correo = "fran.valdenegr@gmail.com";
  let fechaActual = new Date().toLocaleDateString();


  return (
    <>
      <h1>Bienvenido {nombre}</h1>

      <h2>Correo: {correo} ||  usuario: {user} </h2>
      <h3>Fecha: {fechaActual}</h3>
      <h4>Children {children}</h4>

    </>
  );
}

export default WelcomeUser;
