import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import NotFound from './Pages/NotFound';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  return (
    <>
    <AuthProvider>

      
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>  
          }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>

    </AuthProvider>
    </>
  );
}

export default App;
