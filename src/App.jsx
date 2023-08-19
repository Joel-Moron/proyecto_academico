import './App.css';
import Asistente from './Asistente';
import { Routes, Route } from 'react-router-dom';
import Inicio from './component/Inicio';
import Nav from './component/Nav'


import 'primereact/resources/themes/saga-blue/theme.css'; // Elige un tema
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import React from 'react';
import Componente from './component/componente';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='componente' element={<Componente/>}/>
      </Routes>
      <Asistente/>
    </div>
  );
}

export default App;
