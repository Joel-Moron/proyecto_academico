
import React, { useState } from 'react';
import '../css/registro.css'
const Registro = () =>{
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        nombre : nombre,
        email : email,
        contrasena : contrasena,
        app : apellidoPaterno,
        apM : apellidoMaterno
      }
    };
    return (
        <div className="registro-usuario">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="apellidoPaterno">apellido Paterno</label>
          <input
            type="text"
            id="apellidoPaterno"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="apellidoMaterno">apellido Materno</label>
          <input
            type="text"
            id="apellidoMaterno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="DNI">Documento de Indentidad</label>
          <input
            type="number"
            id="DNI"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            required
          />
        </div>
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
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
    )
}

export default Registro;