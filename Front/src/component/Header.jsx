import React, { useRef, useEffect, useState } from 'react';
import Logo from "../images/LogoBonitoGordito.svg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useNavigate } from "react-router-dom"; 


const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const menuLeft = useRef(null);

  const items = [
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

  const cerrar = () => {
    setUser(null);
  };

  return (
    <>
    <header className={`flex justify-content-between align-items-center ${isFullScreen ? 'px-8 gap-5':'pr-4 gap-3'}`}>
      <a onClick={()=>navigate('/')}><img src={Logo}  style={{ width: isFullScreen ? "150px" : '64px', height: isFullScreen ? "150px" : '64px' }} /></a>
      <InputText className="flex-1 " placeholder="Buscador" />
      
      {isFullScreen ? (
        <nav className="flex w-auto">
          <ul className="sf-menu flex gap-5">
                <li>
                  <a onClick={()=>navigate('/about')}>about</a>
                </li>
                <li>
                  <a onClick={()=>navigate('/services')}>services</a>
                </li>
                <li>
                  <a onClick={()=>navigate('/productos')}>productos</a>
                </li>
                {user !== null ? (
                  <>
                    <li onClick={() => cerrar()}>
                      <a href="/">cerrar sesion</a>
                    </li>
                    <li>
                      <a onClick={()=>navigate('/')}>citas</a>
                    </li>
                    </>) : (
                      <>
                    <li>
                      <a onClick={()=>navigate('/inicio-sesion')}>iniciar sesión</a>
                    </li>
                    <li>
                      <a onClick={()=>navigate('/registro')}>registrarse</a>
                    </li></>)}
                  
                
              </ul>
            </nav>
              ) : (
            <div>
              <Menu model={items} popup ref={menuLeft} id="popup_menu_left" className='w-auto text-center' />
              <Button icon="pi pi-align-left" className="mr-2" severity='warning' onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            </div>
            )}
            <i className="pi pi-search">carrito</i>
    </header>
    </>
  );
};

export default Header;
