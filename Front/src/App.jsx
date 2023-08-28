import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

//ESTILOS
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import './App.css';
import './css/style.css';

//COMPONENTES
import Asistente from './component/Asistente';
import Componente from './component/footer';
import Header from './component/Header';
import WhatsApp from './component/WhatsApp';
import AsistenteDialogflow from './component/AsistenteDialogflow';


//PAGINAS
import Services from './pages/Sevices';
import Registro from './pages/Registro';
import InicioSecion from './pages/InicioSesion';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import PageDefault from './pages/PageDefault';
import Citas from './pages/Citas';
import CarritoCompras from './pages/CarritoCompras';


//CONTEXTOS
import { CartProvider } from './Context/CartContex';




const App =()=> {
    const [user,setUser] = useState(null)
    const [avisoCitas, setAvisoCitas] = useState({
      label : 'para ver su historial de citas debe iniciar sesion',
      state : false
    })
    const [userId, setUserId] =useState(localStorage.getItem('user_id') || null) ;
    const [userName, setUserName] =useState(JSON.parse(localStorage.getItem('name')) || null) ;


    
    console.log(userId);

    useEffect(() => {
      // Obtener la ruta actual
      const currentPath = window.location.pathname;
  
      // Verificar si la ruta es '/citas' y cambiar el estado
      if (currentPath === '/citas') {
        setAvisoCitas(prevState => ({ ...prevState, state: true }));
      }
    }, []);


  return (
    <CartProvider>
      <div className="App">
        <Header userId={userId} user={user} setUser={setUser} userName={userName} setUserName={setUserName} setUserId={setUserId} />
        <div className='w-full'  style={{minHeight:'calc(100vh - 370px)'}}>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/carrito' element={<CarritoCompras/>} ></Route>
            {
              userId ?
              (
                <Route path='/citas' element={<Citas/>}/>
              )
              :
              (
                <>
                  <Route path='/citas' element={<InicioSecion setUser={setUser} defaultPath='/citas' aviso={avisoCitas} />}/>
                  <Route path='/inicio-sesion' element={<InicioSecion setUser={setUser} setUserId={setUserId} setUserName={setUserName} />}/>
                  <Route path='/registro' element={<Registro/>}/>
                </>
              )
            }
            <Route path='*' element={<PageDefault/>} />
          </Routes>
          
        </div>
        <Componente/>
      </div>
      {/* <AsistenteDialogflow/> */}
      <WhatsApp/>
      <Asistente/>
    </CartProvider>
  );
}

export default App;
