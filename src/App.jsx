import logo from './logo.svg';
import './App.css';
import Asistente from './Asistente';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={''}/>
      </Routes>
        <Asistente/>
    </div>
  );
}

export default App;
