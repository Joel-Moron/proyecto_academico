import { Button } from 'primereact/button';
import React, {useState} from 'react';

const CardProductos = ({data}) =>{
    const [stock, setStock] = useState(data.stock);

    return(
        <div className='flex flex-column bg-green-400 max-w-20rem h-18rem p-4 align-items-center border-round-xl col-4 gap-1'>
            <img src={data.img} alt="" className='w-11rem h-8rem border-round-lg'/>
            <p htmlFor="">{data.nombre}</p>
            <p htmlFor="">Categoria: {data.categoria}</p>
            <div className='flex gap-5 justify-content-center'>
                <label htmlFor="">Precio: {data.precio}</label>
                <label htmlFor="">Stock: {stock}</label>
            </div>
            <Button className='border-black-alpha-20 bg-black-alpha-20 transition-colors transition-duration-500 hover:bg-yellow-500'
                disabled = {stock === 0}
                onClick={() => setStock(stock-1)}
                label={stock < 1? 'Agotado' : 'Comprar'}
            />
        </div>
    );
}

export default CardProductos