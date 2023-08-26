import { Button } from "primereact/button"

const CardCitas = () => {
    return (
        <div className="flex align-items-center p-2 py-3 border-bottom-1 bg-cover">
            <img className='h-5rem w-5rem border-circle mr-5' src="https://img.freepik.com/vector-premium/diseno-logotipo-dibujos-animados-mascota-perro-lindo-estilo-diseno-plano_203040-109.jpg" alt="Mascota"/>
            <div className="flex flex-column flex-1 text-left gap-1">
                <h3 className="p-0 font-semibold" style={{color:'#333'}}>Nombre del Paciente</h3>
                <p className="text-base" style={{color:'#666'}}>Fecha: 10 de Agosto de 2023</p>
                <p className="text-base" style={{color:'#666'}}>Veterinario: Dr. Juan Pérez</p>
                <p className="text-base" style={{color:'#666'}}>Servicio: Consulta de Rutina</p>
            </div>
        <div className="flex align-items-center">
                <Button className="bg-blue-500">Ver Detalles</Button>
            </div>
        </div>
    )
}
export default CardCitas