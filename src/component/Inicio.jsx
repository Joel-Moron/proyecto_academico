import jsonData from '../json/productos.json';
import CardProductos from './CardProductos';

const Inicio = () => {
    const data = jsonData.productos;
    return(
        <div className="bg-black-alpha-20 p-5 flex flex-wrap gap-5 justify-content-center" style={{minHeight:'calc(100% - 16px)'}}>
        <h2 className='w-full'>Lista de Productos</h2>
            {data.map((product)=>{
                return <CardProductos key={product.id} data={product}/>
            })}
            
        </div>
    )
}

export default Inicio