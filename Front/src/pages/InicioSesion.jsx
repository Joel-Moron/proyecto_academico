import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/registro.css";
const InicioSecion = ({ setUser, defaultPath, aviso }) => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: contrasena,
    };

    console.log(JSON.stringify(data));

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        // Realizar acciones según el tipo de respuesta (éxito)
        localStorage.setItem('name', JSON.stringify(responseData.data.user_name));
        localStorage.setItem('token', JSON.stringify(responseData.data.user_token));
        localStorage.setItem('user_id', JSON.stringify(responseData.data.id));
        navigate( defaultPath || "/");
        setUser(responseData.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Realizar acciones en caso de error (mostrar mensaje de error, etc.)
      });
  };

  return (
      <div className="Contenedorsection pt-5 flex-column">
        <p>{aviso?.state !== false? aviso?.label:''}</p>
        <div className="form-box py-3">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
              <h2 className="loginh2">Iniciar Sesión</h2>
              <div className="inputbox">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Correo Electronico</label>
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
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember Me <Link to='#'>Forget Password</Link>
                </label>
              </div>
              <button type="submit">Iniciar Sesión</button>
              <div className="register">
                <p>
                  No posee una cuenta? <Link to='/registro'>Registrarse</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default InicioSecion;
