import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

//ESTILOS
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import './App.css';
import './css/style.css';

//COMPONENTES
import Asistente from './component/Asistente';
import Componente from './component/footer';
import Header from './component/Header'

//PAGINAS
import Services from './pages/Sevices';
import Registro from './pages/Registro';
import InicioSecion from './pages/InicioSesion';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import PageDefault from './pages/PageDefault';




function App() {
    const [user,setUser] = useState(null)
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <div className='w-full'  style={{minHeight:'calc(100% - 350px)'}}>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/inicio-sesion' element={<InicioSecion setUser={setUser}/>}/>
          <Route path='*' element={<PageDefault/>} />
        </Routes>
        
      </div>
      <Componente/>
      <Asistente/>
    </div>
  );
}

export default App;
