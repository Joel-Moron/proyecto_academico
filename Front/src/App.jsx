import './App.css';
import './css/style.css';
import Asistente from './Asistente';
import { Routes, Route } from 'react-router-dom';
import Inicio from './component/Inicio';
import Header from './component/Header'
import About from './pages/About'


import 'primereact/resources/themes/saga-blue/theme.css'; // Elige un tema
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import React, {useState} from 'react';
import Componente from './component/footer';
import Services from './pages/Sevices';
import Registro from './pages/Registro';
import InicioSecion from './pages/InicioSesion';


function App() {
    const [user,setUser] = useState(null)
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <div className='w-full'  style={{minHeight:'calc(100% - 350px)'}}>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/inicio-sesion' element={<InicioSecion setUser={setUser}/>}/>
        </Routes>
        
      </div>
      <Componente/>
      <Asistente/>
    </div>
  );
}

export default App;
