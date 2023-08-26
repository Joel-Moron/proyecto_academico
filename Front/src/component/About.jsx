const About = () => {
    return(
        <div className="flex flex-column w-full">
          <div className="flex gap-5 w-full justify-content-around">
            <div className="">
              <img src="img/about-us.jpg" alt="Nuestra Clínica"/>
            </div>
            <div className="">
              <h2>Sobre Nosotros</h2>
              <p>
                En Veterinaria PetCare, nos apasiona brindar el mejor cuidado para tus mascotas...
              </p>
            </div>
          </div>


          <div className="services-section">
            <h2>Nuestros Servicios</h2>
            <ul>
              <li>Consultas de Rutina</li>
              <li>Cirugías</li>
              <li>Tratamientos Médicos</li>
              <li>Odontología Veterinaria</li>
            </ul>
          </div>

          <div className="flex flex-column">
            <h2 >Nuestro Equipo</h2>
            <div className="flex justify-content-around">
              <div className="team-member">
                <img src="img/vet1.jpg" alt="Veterinario"/>
                <h3>Dr. Juan Pérez</h3>
                <p>Veterinario Principal</p>
              </div>
              <div className="team-member">
                <img src="img/vet2.jpg" alt="Veterinario"/>
                <h3>Dra. María Rodríguez</h3>
                <p>Veterinaria Asociada</p>
              </div>
              <div className="team-member">
                <img src="img/vet2.jpg" alt="Veterinario"/>
                <h3>Dr. José Rodríguez</h3>
                <p>Veterinario Suplente</p>
              </div>
            </div>
          </div>

          <div className="flex justify-content-around">
            <div className="text-left">
              <h2>Contacto</h2>
              <p>Ponte en contacto con nosotros para programar una cita o hacer preguntas.</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: info@veterinariapetcare.com</p>
            </div>
            <div>
              <h2>Ubicacion</h2>
              <img src="" alt="Mapa Ubicación" />
            </div>
          </div>

        </div>
    )
}

export default About;