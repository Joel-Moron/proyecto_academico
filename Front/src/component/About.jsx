const About = () => {
    return(
        <div className="flex flex-column w-full gap-5">
          <div className="gap-5 w-full justify-content-around">
            <h2>Sobre Nosotros</h2>
            <div className="flex justify-content-evenly">
            <div className="w-4">
              <h3>Misión</h3>
              <p>
                Crear conciencia y contribuir en el bienestar de las mascotas, 
                mediante la prestación de servicios veterinarios de calidad a nuestros pacientes y capacitando a sus propietarios, 
                compartiendo valores, principios éticos, responsabilidad y compromiso.
              </p>
            </div>
            <div className="w-4">
              <h3>Visión</h3>
              <p>
                La clínica veterinaria BONITOS Y GORDITOS tiene como visión ser una empresa sólida, 
                líder en prestación de servicios médicos veterinarios y artículos de la mejor calidad y profesionalismo, 
                buscando la detección, prevención y curación de enfermedades en los animales, generando un ambiente con 
                equilibrio sanitario y emocional para las mascotas y sus propietarios de forma sostenible, profesional y ética.
              </p>
            </div>
            </div>
          </div>


          <div className="services-section">
            <h2>Nuestros Servicios</h2>
            <div className='flex flex-wrap gap-3' style={{ justifyContent: "center" }}>

              <div className='ciruserv card'>
                <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://www.senasa.gob.pe/senasacontigo/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-28-at-3.16.08-PM.jpeg" alt="imagen2" />
                <h1 className="TituloCardServicio">Consultas Médicas</h1>
                <h2 classname="SubtituloCardServicio">Especialistas, contamos con historias clínicas personalizadas, seguimientos de casos.</h2>
              </div>
              <div className='ciruserv card'>
                <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://cdn.cuponidad.pe/images/Deals/banodeperrosveterinariaofertas.jpg" alt="imagen5" />
                <h1 className="TituloCardServicio">Baños y Cortes</h1>
                <h2 classname="SubtituloCardServicio">Contamos con especialistas en cortes a máquina y tijera. Shamputerapia: baños hipoalergénicos, medicados y tratamientos capilares.</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-column">
            <h2 >Nuestro Equipo</h2>
            <div className="flex justify-content-around">
              <div className="team-member">
                <img className="h-10rem w-10rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="Veterinario"/>
                <h3>Dr. Juan Pérez</h3>
                <p>Veterinario Principal</p>
              </div>
              <div className="team-member">
                <img className="h-10rem w-10rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"  alt="Veterinario"/>
                <h3>Dra. María Rodríguez</h3>
                <p>Veterinaria Asociada</p>
              </div>
              <div className="team-member">
                <img className="h-10rem w-10rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"  alt="Veterinario"/>
                <h3>Dr. José Rodríguez</h3>
                <p>Veterinario Suplente</p>
              </div>
            </div>
          </div>

{/*           <div className="flex justify-content-around">
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
          </div> */}

        </div>
    )
}

export default About;