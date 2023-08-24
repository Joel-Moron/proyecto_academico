import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/registro.css";
const InicioSecion = ({ setUser }) => {
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
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setUser(responseData.user);
        navigate("/");
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="Contenedorsection">
      <div className="form-box">
        <div className="form-value">
          <form action="">
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
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <div className="register">
              <p>
                No posee una cuenta? <a onClick={()=>navigate('/registro')}>Registrarse</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioSecion;
