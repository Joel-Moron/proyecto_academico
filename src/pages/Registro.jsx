
import React, { useState } from 'react';
import '../css/registro.css'
import { useNavigate } from 'react-router-dom';
const Registro = () =>{
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [dni, setDni] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        nombre : nombre,
        email : email,
        password : contrasena,
        app : apellidoPaterno,
        apm : apellidoMaterno
      }
      
      console.log(JSON.stringify(data))

      fetch('http://127.0.0.1:8000/api/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        navigate('/inicio-sesion');

      })
      .catch(error => console.error('Error fetching data:', error));

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
            value={dni}
            onChange={(e) => setDni(e.target.value)}
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