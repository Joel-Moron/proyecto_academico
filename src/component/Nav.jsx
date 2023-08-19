
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
        
const Nav = () => {
    return(
        <div   
        style={{
            height:'60px',
            backgroundColor:'gray',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
        }}>
            
            <div className='flex justify-content-end align-items-center gap-2 p-3 px-8'>
                <p>Bonitos y Gorditos</p>
                <InputText className='flex-1 h-2rem border-round-2xl'/>
                <p>Categorias</p>
                .<i className="fas fa-accessible-icon">icon</i>
                <Button className='  border-green-400 bg-green-400  ' label='Iniciar Sesion'/>
                <Button className=' bg-white-alpha-90 border-white-alpha-90  text-black-alpha-90  font-weight-bold' label='Cerrar Sesion'/>
            </div>
        </div>
    )
}

export default Nav;