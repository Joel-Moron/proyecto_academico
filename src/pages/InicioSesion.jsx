import React, { useState } from 'react';
import '../css/registro.css'
const InicioSecion = () =>{
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        email : email,
        contrasena : contrasena
      }
    };
    return (
        <div className="registro-usuario">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div className="boton-formulario">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
    )
}

export default InicioSecion;