import { Button } from 'primereact/button';
import React, {useState,useContext} from 'react';
import { CartContext } from '../Context/CartContex';


const CardProductos = ({data}) =>{
    const [stock/* , setStock */] = useState(data.stock);
    const {cart, addToCart} = useContext(CartContext);
    const AgregarCarrito = (product) => {

        addToCart(product)
        //setStock(stock-1)
        //setCart(prevItems => [...prevItems, product]);
        console.log(cart);
    }

    return(
        <div style={{background:'#E99E05', boxShadow:'2px 2px rgba(0, 0, 0, 0.4)'}} className='flex flex-column  max-w-20rem h-20rem p-4 align-items-center border-round-xl col-4 gap-1'>
            <img src={data.img} alt="" className='max-w-12rem max-h-9rem border-round-lg' style={{height:'70%',width:'100%'}}/>
            <p style={{fontWeight:'bold',fontSize:'18px',marginTop:''}} className='text-black-alpha-90'>{data.nombre}</p>
            <p style={{fontWeight:'bold', }} className='text-black-alpha-90'>Categoria: {data.categoria}</p>
            <div className='flex gap-5 justify-content-center'>
                <label className='text-black-alpha-90'>Precio: {data.precio}</label>
                {/* <label className='text-black-alpha-90'>Stock: {stock}</label> */}
            </div>
            <Button className='border-black-alpha-20 bg-black-alpha-20 transition-colors transition-duration-500 hover:bg-#312145-500'
                onClick={() => AgregarCarrito(data)}
                label={stock < 1? 'Agotado' : 'Añadir al Carrito'}
            />
        </div>
    );
}

export default CardProductos