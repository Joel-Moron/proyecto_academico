

const Registro = () =>{
    return (
        <div class="container">
        <form class="registration-form">
            <h2>Registro de Usuario</h2>
            <div class="input-container">
                <label for="username">Nombre de Usuario</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="input-container">
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-container">
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="input-container">
                <label for="confirm-password">Confirmar Contraseña</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
            </div>
            <button type="submit">Registrarse</button>
        </form>
    </div>
    )
}

export default Registro;