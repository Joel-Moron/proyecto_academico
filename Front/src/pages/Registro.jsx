import React, { useState } from "react";
import "../css/registro.css";
import { useNavigate } from "react-router-dom";
const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [dni, setDni] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      nombre: nombre,
      email: email,
      password: contrasena,
      app: apellidoPaterno,
      apm: apellidoMaterno,
    };

    console.log(JSON.stringify(data));

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        navigate("/inicio-sesion");
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="Contenedorsection">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2 className="loginh2">Registro de Usuario</h2>
            <div className="inputbox">
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                id="apellidoPaterno"
                value={apellidoPaterno}
                onChange={(e) => setApellidoPaterno(e.target.value)}
                required
              />
              <label htmlFor="apellidoPaterno">Apellido Paterno</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                id="apellidoMaterno"
                value={apellidoMaterno}
                onChange={(e) => setApellidoMaterno(e.target.value)}
                required
              />
              <label htmlFor="apellidoMaterno">Apellido Materno</label>
            </div>

            <div className="inputbox">
              <input
                type="number"
                id="DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
              />
              <label htmlFor="DNI">Documento de Indentidad</label>
            </div>
            <div className="inputbox">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Correo Electrónico</label>
            </div>
            <div className="inputbox">
              <input
                type="password"
                id="contrasena"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
              <label htmlFor="contrasena">Contraseña</label>
            </div>
            <button type="submit">Registrarse</button>
            <div className="register">
              <p>
                {/* No posee una cuenta? <a href="/registro">Registrarse</a> */}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
