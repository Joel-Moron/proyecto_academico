const About = () => {
  return (
    <div className="flex flex-column w-full gap-5">
      <div style={{ height: 'auto', backgroundImage: 'radial-gradient(circle at 104.17% 95.45%, #efe37b 0, #f4d86e 12.5%, #f9cb60 25%, #fcbd54 37.5%, #ffad49 50%, #ff9c41 62.5%, #ff8b3e 75%, #ff7a40 87.5%, #ff6945 100%)' }} className="flex p-4 gap-5 w-full justify-content-around  flex-column">
        <h2 style={{ fontSize: '6vmin', fontWeight: 'bold', height: '4rem', marginTop: '20px', color: 'white', marginBottom: '20px' }}>Sobre Nosotros</h2>
        <div className="flex w-full">

          {/* Contenedor Misión */}
          <div className="flex flex-wrap justify-content-around">
            <div className="text-center w-4" style={{minWidth:'450px', boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.4)', borderRadius:'15px 15px 15px 15px'}}>
              <h3 style={{ fontWeight: 'bold', fontSize: '2.5rem', height: '5rem', paddingTop: '1rem' }}>Misión</h3>
              <p style={{ justifyContent: 'center', color:'brown', display: 'flex', alignItems: 'center', fontSize: '1.4rem', fontWeight: 'bold', margin: '0 auto' }}>
                Crear conciencia y contribuir en el bienestar de las mascotas,
                mediante la prestación de servicios veterinarios de calidad a nuestros pacientes y capacitando a sus propietarios,
                compartiendo valores, principios éticos, responsabilidad y compromiso; asi mismo promover las buenas practicas de la educacion y buen trato hacia todos los seres vivos, en especial hacia los pequeños peludos del hogar.
              </p>
            </div>
            <img className="w-4 max-h-22rem" src="https://universidadeuropea.com/resources/media/images/salidas-veterinaria-1200x630_oti17Ra.original.jpg" alt="" style={{borderRadius:' 120px  120px  50px' }}/>
          </div>
          <div>

          </div>
        </div>
        

        <div className="flex w-full">
          <div className="flex flex-wrap justify-content-around">
            <img className="w-4 max-h-22rem" src="https://st3.depositphotos.com/13194036/32088/i/450/depositphotos_320886642-stock-photo-selective-focus-of-veterinarian-assisting.jpg" alt="" style={{borderRadius:' 120px  120px  50px' }}/>
            <div className="flex flex-column text-center w-4" style={{minWidth:'450px', boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.4)', borderRadius:'15px 15px 15px 15px'}}>
              <h3 style={{ fontWeight: 'bold', fontSize: '2.5rem', height: '5rem', paddingTop: '1rem' }}>Misión</h3>
              <p className="flex-1 " style={{  color:'brown', fontSize: '1.4rem', fontWeight: 'bold', margin: '0 auto' }}>
                La clínica veterinaria BONITOS Y GORDITOS tiene como visión ser una empresa sólida,
                líder en prestación de servicios médicos veterinarios y artículos de la mejor calidad y profesionalismo,
                buscando la detección, prevención y curación de enfermedades en los animales, generando un ambiente con
                equilibrio sanitario y emocional para las mascotas y sus propietarios de forma sostenible, profesional y ética.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="services-section">
        <h2 style={{ fontSize: '6vmin', fontWeight: 'bold', height: '4rem', marginTop: '10px', color: '#E99E05' }}>Nuestros Servicios</h2>
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

      <div style={{ height: 'auto' }} className="flex flex-column">
        <h2 style={{ fontSize: '6vmin', fontWeight: 'bold', height: '5rem', margin: '50px', color: '#E99E05' }} >Nuestro Equipo</h2>
        <div style={{height:'auto'}} className="flex justify-content-around flex-wrap gap-5">
          <div style={{boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.4)',borderRadius:'5px 5px 5px 5px'}} className="card team-member">
            <img style={{height:'20rem', width:'20rem'}} className="" src="https://clinicaveterinariasangabriel.pe/wp-content/uploads/2016/06/DSC_07971-1024x925-1.jpg" alt="Veterinario" />
            <h3 style={{fontWeight:'bold',marginTop:'10px',}}> Dr. Juan Pérez</h3>
            <p style={{fontWeight:'bold',fontSize:'1rem'}}>Veterinario Principal</p>
          </div>
          <div style={{boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.4)',borderRadius:'5px 5px 5px 5px'}} className="card team-member">
            <img style={{height:'20rem', width:'20rem'}} src="data:image/jpeg;base64,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" alt="Veterinario" />
            <h3 style={{fontWeight:'bold',marginTop:'10px',}}>Dra. María Rodríguez</h3>
            <p style={{fontWeight:'bold',fontSize:'1rem'}}>Veterinaria Asociada</p>
          </div>
          <div style={{boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.4)',borderRadius:'5px 5px 5px 5px'}} className="card team-member">
            <img style={{height:'20rem', width:'20rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGzYafUPuxAt0RiyYFloeCO-8lqtoEuTwcg&usqp=CAU" alt="Veterinario" />
            <h3 style={{fontWeight:'bold',marginTop:'10px',}}>Dr. José Rodríguez</h3>
            <p style={{fontWeight:'bold',fontSize:'1rem'}}>Veterinario Suplente</p>
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