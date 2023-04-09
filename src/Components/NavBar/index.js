import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';

const NavBar = () => {
  return (
    <header className='bg-transparent z-50 w-full '>
      <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
        <div className='flex flex-grow items-center'>
          <Link to='/'><img src={Logo} alt='Logo' className='w-36 cursor-pointer'/></Link>
          <h1 className='text-center text-3xl font-semibold text-gray-700'>Marketplace</h1>
        </div>

        <div className='flex items-center justify-end space-x-6'>
         <Link to='/login'><button>Login</button></Link>
          <Link to='/cadastro'><button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105'>Cadastro</button></Link>

        </div>
      </nav>

    </header>
  )
}

export default NavBar
