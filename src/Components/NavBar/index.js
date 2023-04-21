import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import { AuthContext } from '../../Context/AuthContext';
import { BsFillCartFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';

const NavBar = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);
  console.log(`valor do contexto`, userLogged);
  return (
    <header className='bg-transparent z-50 w-full '>
      <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
        <div className='flex flex-grow items-center'>
          <Link to='/'><img src={Logo} alt='Logo' className='w-36 cursor-pointer'/></Link>
          <h1 className='text-center text-3xl font-semibold text-gray-700'>Marketplace</h1>
        </div>
        <div>
          {userLogged ? (
            <div className='flex items-center justify-end space-x-4'>
              <div className='relative flex cursor-pointer'>
                <span className='bg-primary w-4 h-4 rounded-full p-1 items-center flex justify-center -right-2 -top-2'></span>
                  <BsFillCartFill className='w-6 h-6 cursor-pointer' />
              </div>
              <img src='' alt=''/>
              <p className='text-gray-700'>Nome Usuario</p>
                <MdLogout className='w-6 h-6 cursor-pointer' onClick={logoutUser} />
            </div>
          ) : (
          
          <div className='flex items-center justify-end space-x-6'>
         <Link to='/login'><button>Login</button></Link>
          <Link to='/cadastro'><button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105'>Cadastro</button></Link>
          </div>
       ) }
        </div>
      </nav>

    </header>
  )
}

export default NavBar
