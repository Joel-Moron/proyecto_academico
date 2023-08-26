import React, { useRef, useEffect, useState } from 'react';
import Logo from "../images/LogoBonitoGordito.svg";

//IMPORTACION DE COMPONENTES
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { useNavigate } from "react-router-dom"; 


const Header = ({ user, setUser, userId }) => {
  const navigate = useNavigate();
  const menuLeftBurger = useRef(null);
  const itemsBurger = [
    {
        label: 'Sobre nosotros',
        command: () => {navigate('/about')}
    },
    {
        label: 'Servicios',
        command: () => {navigate('/services')}
    },
    {
        label: 'Productos',
        command: () => {navigate('/productos')}
    },
    {
        label: 'Iniciar sesión',
        command: () => {navigate('/inicio-sesion')}
    },
    {
      label: 'Registro',
      command: () => {navigate('/registro')}
    }
  ];


  const menuLeftUser = useRef(null);
  const itemsUser = userId === null ?
    ([{
        label: 'Iniciar sesión',
        command: () => {navigate('/inicio-sesion')}
    },
    {
      label: 'Registro',
      command: () => {navigate('/registro')}
    }])
    :
    ([{
        label: 'Citas',
        command: () => {navigate('/citas')}
    },
    {
        label: 'Cerrar Sesión',
        command: () => {cerrarSesion();
        navigate('/')}
    }])
    
  ;

  
  const menuLeftCarrito = useRef(null);
  const itemsCarrito =([
      { 
        command: () => { },
        template: (item, options) => {
            return (
                <button onClick={(e) => options.onClick(e)} className={'w-full p-link flex align-items-center px-1'}>
                  <img className='pi pi-shopping-cart mr-2 p-1 border-circle bg-orange-300' src="" alt="" />
                    <div className="flex flex-column align">
                        <span className="font-bold">Producto 1</span>
                        <span className="text-sm">Precio</span>
                    </div>
                </button>
            )
      }},
      { separator: true},
      { 
        command: () => { },
        template: (item, options) => {
            return (
                <button onClick={(e) => options.onClick(e)} className={'w-full p-link flex align-items-center px-1'}>
                    <img className='pi pi-shopping-cart mr-2 p-1 border-circle bg-orange-300' src="" alt="" />
                    <div className="flex flex-column align">
                        <span className="font-bold">Producto 2</span>
                        <span className="text-sm">Precio</span>
                    </div>
                </button>
            )
      }},
      { separator: true},
      { 
        command: () => { },
        template: (item, options) => {
            return (
                <button onClick={(e) => options.onClick(e)} className={'w-full p-link flex align-items-center px-1'}>
                    <img className='pi pi-shopping-cart mr-2 p-1 border-circle bg-orange-300' src="" alt="" />
                    <div className="flex flex-column align">
                        <span className="font-bold">Producto 3</span>
                        <span className="text-sm">Precio</span>
                    </div>
                </button>
            )
      }}
    ])
  ;

  //SABER SI EL ANCHO EN MENOR A 1200px

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleResize = () => {
    setIsFullScreen(window.innerWidth > 1200);
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  //FUNCION PARA CERRAR SESION DEL USUARIO

  const cerrarSesion = () => {
    setUser(null);
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
  };

  //RETORNAR

  return (
    <>
    <header className={`flex justify-content-between align-items-center ${isFullScreen ? 'px-8 gap-5':'pr-4 gap-3'}`}>
      <a onClick={()=>navigate('/')}><img src={Logo}  style={{ width: isFullScreen ? "150px" : '64px', height: isFullScreen ? "150px" : '64px' }} /></a>
      {/* BUSCADOR */}
      <span className="flex-1 p-input-icon-left">
        <i className="pi pi-search" />
        <InputText className='w-full border-round-xl' placeholder="Search" />
      </span>
      {/* Navegacion */}
      
      {isFullScreen ? (
        //LINKS
        <nav className="flex w-auto">
          <ul className="sf-menu flex gap-5">
            <li>
              <a onClick={()=>navigate('/')}>Inicio</a>
            </li>
            <li>
              <a onClick={()=>navigate('/services')}>services</a>
            </li>
            <li>
              <a onClick={()=>navigate('/productos')}>productos</a>
            </li>
          </ul>
        </nav>
      ) : (
        //MENU HAMBURGUESA
        <div>
          <Menu model={itemsBurger} popup ref={menuLeftBurger} id="popup_menu_left" className='w-auto text-center' />
          <Button icon="pi pi-align-left" className="mr-2" severity='warning' onClick={(event) => menuLeftBurger.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
        </div>
      )}
      <div className='relative'>
        <Menu model={itemsCarrito} popup ref={menuLeftCarrito} id="popup_menu_left"/>
        <Button  type="button" icon="pi pi-shopping-cart" className="mr-2 border-circle" severity='warning' onClick={() => navigate('/carrito')} onMouseEnter={(event) => menuLeftCarrito.current.toggle(event)} onMouseLeave={(event) => menuLeftCarrito.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup >

        </Button>
        <Badge className='absolute' value={4} style={{left:'23px', bottom:'23px'}}/>
      </div>
      <div>
        <Menu model={itemsUser} popup ref={menuLeftUser} id="popup_menu_left" className='w-auto text-center' />
        <Button  icon="pi pi-user" className="mr-2 border-circle" severity='warning' onClick={(event) => menuLeftUser.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
      </div>

    </header>
    </>
  );
};

export default Header;
