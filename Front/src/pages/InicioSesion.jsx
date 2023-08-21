import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/registro.css'
const InicioSecion = ({setUser}) =>{

    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        email : email,
        password : contrasena
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
        setUser(responseData.user)
        navigate('/');

      })
      .catch(error => console.error('Error fetching data:', error));

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