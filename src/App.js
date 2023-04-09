import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <>
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
