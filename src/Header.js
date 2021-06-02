import React from 'react'
import Validador from './Validador';
import validador from './imagenes/validador.png';
import './Estilo.css';

function validate() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={validador} alt="validador"/>
          <p>Este validador es para pobrar si su rut es verificable. Debe ingresar el rut con puntos y digito verificable. Luego
            se debe ingresar la contraseña (password) para finalizar con el validador.
          </p>
          <p><h2>INGRESE SU RUT</h2></p>
          <Validador placeholder="00000000-0" />
          <p><h3>Muchas Gracias por su participación!</h3></p>
        </header>
      </div>
    );
  }
  
  export default validate;