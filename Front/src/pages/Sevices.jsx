import React from 'react'
import "../css/CardServicio.css"


const Services = () => {

  return (
    // <div className='Todoooooooooooooo flex w-full'>
      <div className='flex flex-wrap gap-3 p-4 w-full' style={{ justifyContent: "center", marginTop: "1rem" }}>
        <div className='flex flex-column' style={{ backgroundColor: 'ff9200' }}>
          <h2 style={{ fontSize: '50px', color:'#E99E05' }}>Nuestros Servicios</h2><br />
          <span style={{ fontSize: '20px', color: 'gray', fontFamily: 'italic' }}>Lo que ofrecemos:</span>
        </div>
        <div className='flex flex-wrap gap-3' style={{ justifyContent: "center" }}>

          <div className='ciruserv card  gap-3 '>
            <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '5px' }} src="https://cremalia.net/wp-content/uploads/cuidados-postoperatorio-para-tu-perro-cremalia.jpg" alt="imagser1" />
            <h1 className="TituloCardServicio">Cirugías</h1>
            <h2 classname="SubtituloCardServicio">Contamos con quirófano equipado, cirujanos especialistas, instrumental esterilizado previa cirugía.</h2>
          </div>
          <div className='ciruserv card'>
            <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://www.senasa.gob.pe/senasacontigo/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-28-at-3.16.08-PM.jpeg" alt="imagen2" />
            <h1 className="TituloCardServicio">Consultas Médicas</h1>
            <h2 classname="SubtituloCardServicio">Especialistas, contamos con historias clínicas personalizadas, seguimientos de casos.</h2>
          </div>
          <div className='ciruserv card'>
            <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://cdn.discordapp.com/attachments/864577245905551391/1144749504533368872/image.png" alt="imagen3" />
            <h1 className="TituloCardServicio">Hospedajes</h1>
            <h2 classname="SubtituloCardServicio">Realizamos sociabilizacion con otras mascotas, bajo supervisión médica, salidas constantes.</h2>
          </div>
          <div className='ciruserv card'>
            <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://privado.felicidando.com/files/products/30/ab8632be67fc1d0f1bba1a2b06bc84bde55f5c27.jpg" alt="imagser4" />
            <h1 className="TituloCardServicio">Internamientos</h1>
            <h2 classname="SubtituloCardServicio">De 24 hrs, con médicos veterinarios titulados y colegiados a cargo.</h2>
          </div>
          <div className='ciruserv card'>
            <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://cdn.cuponidad.pe/images/Deals/banodeperrosveterinariaofertas.jpg" alt="imagen5" />
            <h1 className="TituloCardServicio">Baños y Cortes</h1>
            <h2 classname="SubtituloCardServicio">Contamos con especialistas en cortes a máquina y tijera. Shamputerapia: baños hipoalergénicos, medicados y tratamientos capilares.</h2>
          </div>
          <div className='ciruserv card'>
            <img style={{ height: "34vmin", width: "43vmin", borderRadius: '80px 30px 80px 30px', marginBottom: '19px' }} src="https://img.lalr.co/cms/2015/07/09125804/alimentos_1.jpg" alt="imagen6" />
            <h1 className="TituloCardServicio">Comidas Premium</h1>
            <h2 classname="SubtituloCardServicio">Pro Plan, BRIT, Nutram, Hills, Virbac, Nutranuggets, Vet Life, Taste of the Wild, etc</h2>
          </div>
        </div>


      {/* </div> */}

    </div>



























    //         <section id="content">
    //   <div class="container_24">
    //     <div class="indent-bot-2 boxes-bg">
    //       <article class="grid_6">
    //         <div class="box-1">

    //           <div class="card flex flex-column">
    //             <img style={{height:"150px", width:"240px" }} src="https://cremalia.net/wp-content/uploads/cuidados-postoperatorio-para-tu-perro-cremalia.jpg" alt="servicio1" />
    //             <h3>Cirugías</h3>
    //             <p> Contamos con quirófano equipado, cirujanos especialistas, instrumental esterilizado previa cirugía. </p>
    //             <div class="btn-container">
    //               {/* <div class="button-box"> <a href="#" class="button">read more</a> </div> */}
    //             </div>

    //           </div>
    //         </div>
    //       </article>
    //       <article class="grid_6">
    //         <div class="box-1">

    //           <div class="inner">
    //             {/* <img src="https://cremalia.net/wp-content/uploads/cuidados-postoperatorio-para-tu-perro-cremalia.jpg" alt="servicio1" /> */}
    //             <h3>Consultas Médicas</h3>
    //             <p> Especialistas, contamos con historias clínicas personalizadas, seguimientos de casos.</p>
    //             <div class="btn-container">
    //               {/* <div class="button-box"> <a href="#" class="button">read more</a> </div> */}
    //             </div> 

    //           </div>
    //         </div>
    //       </article>
    //       <article class="grid_6">
    //         <div class="box-1">

    //           <div class="inner">
    //             {/* <img src="https://cremalia.net/wp-content/uploads/cuidados-postoperatorio-para-tu-perro-cremalia.jpg" alt="servicio1" /> */}
    //             <h3>Hospedajes</h3>
    //             <p>Realizamos sociabilizacion con otras mascotas, bajo supervisión médica, salidas constantes.</p>
    //             <div class="btn-container">
    //               {/* <div class="button-box"> <a href="#" class="button">read more</a> </div> */}
    //             </div> 

    //           </div>
    //         </div>
    //       </article>
    //       <article class="grid_6">
    //         <div class="box-1">
    //           <div class="inner">
    //             <h3>Vaccinations</h3>
    //             <p class="p0"> <strong class="str-1"> Vivamus hendrerit mauris ut gravida ut viverra </strong> </p>
    //             <p> Cras mattis tempor eros nec tristique. Sed sed felis arcu, vel vehicula augue. </p>
    //             <div class="btn-container">
    //               <div class="button-box"> <a href="#" class="button">read more</a> </div>
    //             </div>
    //           </div>
    //         </div>
    //       </article>
    //       <div class="clear"></div>
    //       <div class="a1">
    //         <h2>Our services:</h2>
    //       </div>
    //       <div class="wrapper">
    //         <div class="grid_8">
    //           <div class="pad-right">
    //             <div class="wrapper"> <img src={Img1} alt="" class="img-indent-1"/>
    //               <div class="extra-wrap">
    //                 <p class="p2"> <strong class="str-1"> immunization &amp; welness care </strong> </p>
    //                 <p class="p0"> <strong> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec. </strong> </p>
    //               </div>
    //             </div>
    //             <p class="p1"> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec ique. Sed sed felis arcu, vel vehicula augue. Maecenas faucibus sagittis cursus. Fusce tincidunt, tellus. </p>
    //             <div class="alignright p3"> <a href="#" class="link">read more</a> </div>
    //           </div>
    //         </div>
    //         <div class="grid_8">
    //           <div class="pad-right">
    //             <div class="wrapper"> <img src={Img2} alt="" class="img-indent-1"/>
    //               <div class="extra-wrap">
    //                 <p class="p2"> <strong class="str-1"> radiology </strong> </p>
    //                 <p class="p0"> <strong> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec tristique. </strong> </p>
    //               </div>
    //             </div>
    //             <p class="p1"> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec ique. Sed sed felis arcu, vel vehicula augue. Maecenas faucibus sagittis cursus. Fusce tincidunt, tellus. </p>
    //             <div class="alignright p3"> <a href="#" class="link">read more</a> </div>
    //           </div>
    //         </div>
    //         <div class="grid_8">
    //           <div class="pad-right">
    //             <div class="wrapper"> <img src={Img3} alt="" class="img-indent-1"/>
    //               <div class="extra-wrap">
    //                 <p class="p2"> <strong class="str-1"> dental care </strong> </p>
    //                 <p class="p0"> <strong> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec tristique. </strong> </p>
    //               </div>
    //             </div>
    //             <p class="p1"> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec ique. Sed sed felis arcu, vel vehicula augue. Maecenas faucibus sagittis cursus. Fusce tincidunt, tellus. </p>
    //             <div class="alignright p3"> <a href="#" class="link">read more</a> </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="hr-border-2"></div>
    //       <div class="wrapper">
    //         <div class="grid_8">
    //           <div class="pad-right">
    //             <div class="wrapper"> <img src={Img4} alt="" class="img-indent-1"/>
    //               <div class="extra-wrap">
    //                 <p class="p2"> <strong class="str-1"> ultrasound </strong> </p>
    //                 <p class="p0"> <strong> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec tristique. </strong> </p>
    //               </div>
    //             </div>
    //             <p class="p1"> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec ique. Sed sed felis arcu, vel vehicula augue. Maecenas faucibus sagittis cursus. Fusce tincidunt, tellus. </p>
    //             <div class="alignright p3"> <a href="#" class="link">read more</a> </div>
    //           </div>
    //         </div>
    //         <div class="grid_8">
    //           <div class="pad-right">
    //             <div class="wrapper"> <img src={Img5} alt="" class="img-indent-1"/>
    //               <div class="extra-wrap">
    //                 <p class="p2"> <strong class="str-1"> surgery </strong> </p>
    //                 <p class="p0"> <strong> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec tristique. </strong> </p>
    //               </div>
    //             </div>
    //             <p class="p1"> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec ique. Sed sed felis arcu, vel vehicula augue. Maecenas faucibus sagittis cursus. Fusce tincidunt, tellus. </p>
    //             <div class="alignright p3"> <a href="#" class="link">read more</a> </div>
    //           </div>
    //         </div>
    //         <div class="grid_8">
    //           <div class="pad-right">
    //             <div class="wrapper"> <img src={Img6} alt="" class="img-indent-1"/>
    //               <div class="extra-wrap">
    //                 <p class="p2"> <strong class="str-1"> pharmacy </strong> </p>
    //                 <p class="p0"> <strong> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec tristique. </strong> </p>
    //               </div>
    //             </div>
    //             <p class="p1"> Vivamus hendrerit mauris ut dui gravida ut viverra lectus tincidunt. Cras mattis tempor eros nec ique. Sed sed felis arcu, vel vehicula augue. Maecenas faucibus sagittis cursus. Fusce tincidunt, tellus. </p>
    //             <div class="alignright p3"> <a href="#" class="link">read more</a> </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Services;