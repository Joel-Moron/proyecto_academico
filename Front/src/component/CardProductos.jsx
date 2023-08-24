import { Button } from 'primereact/button';
import React, {useState} from 'react';

const CardProductos = ({data}) =>{
    const [stock, setStock] = useState(data.stock);

    return(
        <div className='flex flex-column bg-green-400 max-w-20rem h-18rem p-4 align-items-center border-round-xl col-4 gap-1'>
            <img src={data.img} alt="" className='w-11rem h-8rem border-round-lg'/>
            <p className='text-black-alpha-90'>{data.nombre}</p>
            <p className='text-black-alpha-90'>Categoria: {data.categoria}</p>
            <div className='flex gap-5 justify-content-center'>
                <label className='text-black-alpha-90'>Precio: {data.precio}</label>
                <label className='text-black-alpha-90'>Stock: {stock}</label>
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