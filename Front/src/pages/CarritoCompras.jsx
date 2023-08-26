import { Button } from "primereact/button";
import { useContext } from "react";
import { CartContext } from "../Context/CartContex";



const CarritoCompras = () => {

    const itemsCart = localStorage.getItem('cartSell');

    console.log(itemsCart)

    const {cart, RemoveToCart, addToCart, clearCart} = useContext(CartContext);

    console.log(cart);


    const total = cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);


    const EliminarProducto = (product) => {
        RemoveToCart(product, true);
    }

    const AgregarProducto = (product) => {
        addToCart(product, true);
    }

    const QuitarProducto = (product) => {
        RemoveToCart(product, false);
    }

    return (
        <>
            <div className="container w-9 mx-auto">
                <div className="p-4 mb-4" style={{boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)'}}>
                    <h2>Carrito de Compras</h2>
                    {   cart.length > 0 ?
                        cart?.map((product,index) => {
                            return (
                                <div className="flex align-items-center p-2 py-3 border-bottom-1 bg-cover">
                                    <img className='h-5rem w-5rem border-circle mr-5' src={product.img} alt="Producto"/>
                                    <div className="flex flex-column flex-1 text-left gap-1">
                                        <h4 className="p-0 font-semibold" style={{color:'#333'}}>{product.nombre}</h4>
                                        <p className="text-base" style={{color:'#666'}}>stock: {product.stock} </p>
                                        <p className="text-base" style={{color:'#666'}}>Cantidad: {product.cantidad} </p>
                                        <p className="text-base" style={{color:'#666'}}>precio Unitario: S/ {product.precio} </p>
                                        <p className="text-base" style={{color:'#666'}}>precio Total: S/ {(product.precio*product.cantidad).toFixed(2)} </p>
                                    </div>
                                <div className="flex align-items-center">
                                        <Button disabled = {product.cantidad === 0} onClick={() => QuitarProducto(product)}  className="bg-blue-500">Quitar</Button>
                                        <Button disabled = {product.stock === product.cantidad} onClick={() => AgregarProducto(product)} className="bg-blue-500">Agregar</Button>
                                        <Button onClick={() => EliminarProducto(product)} className="bg-blue-500">Eliminar</Button>
                                    </div>
                                </div>
                            );
                        }):
                        <p>El carrito esta vacio</p>
                    }
                    
                    <div className="flex align-items-center p-2 py-3 border-bottom-1 bg-cover">
                        <div className="flex flex-1 text-left gap-1">
                            <p className="text-base" style={{color:'#666'}}>Precio total de los productos: S/ {total.toFixed(2)} </p>
                        </div>
                        <div className="flex align-items-center">
                            <Button className="bg-blue-500">Comprar</Button>
                            <Button onClick={() => clearCart()} className="bg-blue-500">Vaciar Carrito</Button>
                        </div>
                    </div>

                </div>
            </div>
            
            

        </>
    )
}

export default CarritoCompras;