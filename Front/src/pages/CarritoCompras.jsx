import { Button } from "primereact/button";

const CarritoCompras = () => {

    let numCitas = [1,2,3,4,5,6];

    return (
        <>
            <div className="container w-9 mx-auto">
                <div className="p-4 mb-4" style={{boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)'}}>
                    <h2>Carrito de Compras</h2>
                    {
                        numCitas.map((product,index) => {
                            return (
                                <div className="flex align-items-center p-2 py-3 border-bottom-1 bg-cover">
                                    <img className='h-5rem w-5rem border-circle mr-5' src="https://img.freepik.com/vector-premium/diseno-logotipo-dibujos-animados-mascota-perro-lindo-estilo-diseno-plano_203040-109.jpg" alt="Mascota"/>
                                    <div className="flex flex-column flex-1 text-left gap-1">
                                        <h4 className="p-0 font-semibold" style={{color:'#333'}}>Producto {index+1}</h4>
                                        <p className="text-base" style={{color:'#666'}}>stock</p>
                                        <p className="text-base" style={{color:'#666'}}>Cantidad</p>
                                        <p className="text-base" style={{color:'#666'}}>precio Unitario</p>
                                        <p className="text-base" style={{color:'#666'}}>precio Total</p>
                                    </div>
                                <div className="flex align-items-center">
                                        <Button className="bg-blue-500">Ver Detalles</Button>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
            
            

        </>
    )
}

export default CarritoCompras;