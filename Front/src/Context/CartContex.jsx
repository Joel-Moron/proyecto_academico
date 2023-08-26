import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartSell')) || [])

    const addToCart = (product) => {
        // Verificar si ya existe un objeto con el mismo id
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
      
        if (existingItemIndex >= 0) {
          // Actualizar el stock del objeto existente
          const updatedItems = cart.map((item, index) =>
            index === existingItemIndex ? { ...item, cantidad: item.cantidad + 1 } : item
          );
          setCart(updatedItems);
          localStorage.setItem('cartSell', JSON.stringify(updatedItems));
        } else {
          // Agregar el nuevo objeto al arreglo
          const updatedCart = [...cart, { ...product, cantidad: 1 }];
          setCart(updatedCart);
          localStorage.setItem('cartSell', JSON.stringify(updatedCart));
        }
      }

    const RemoveToCart = (product,Delete) => {
        // Verificar si ya existe un objeto con el mismo id
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if(existingItemIndex >= 0 && Delete) {
            const updatedItems = cart.filter((item, index) =>
                index !== existingItemIndex
            );
            setCart(updatedItems);
        }else if (existingItemIndex >= 0) {
            // Actualizar el stock del objeto existente
            const updatedItems = cart.map((item, index) =>
            index === existingItemIndex ? { ...item, cantidad: item.cantidad - 1 } : item
            );
            setCart(updatedItems);
        }
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cartSell');
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            setCart,
            RemoveToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}