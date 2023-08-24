import DataProductos from '../json/productos.json'
import CardProductos from '../component/CardProductos';
 
const Productos = () => {
    return(
        <section className='w-full grid gap-5 justify-content-center '>
        {DataProductos.productos.map(Product => {
          return(
            <>
              <CardProductos data={Product} />
            </>
          )
        })}
      </section>
    )
}

 export default Productos;