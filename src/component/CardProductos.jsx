import { Button } from 'primereact/button';

const CardProductos = ({data}) =>{

    return(
        <div className='flex flex-column bg-green-400 max-w-20rem h-18rem p-4 align-items-center border-round-xl col-4 gap-1'>
            <img src={data.img} alt="" className='w-11rem h-8rem'/>
            <p htmlFor="">{data.nombre}</p>
            <p htmlFor="">Categoria: {data.categoria}</p>
            <div className='flex gap-5 justify-content-center'>
                <label htmlFor="">Precio: {data.precio}</label>
                <label htmlFor="">Stock: {data.stock}</label>
            </div>
            <Button className='border-black-alpha-20 bg-black-alpha-20 transition-colors transition-duration-500 hover:bg-yellow-500' >Comprar</Button>
        </div>
    );
}

export default CardProductos