import React from 'react'
import Generic from '../../Assets/generic.png'

const Product = () => {
  return (
    <div className='bg-white border border-gray-400 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
      <span className='bg-red-100 border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Lanches</span>
      <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src= {Generic} alt="Imagem de lanche" />
      <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-gray-900 text-lg'>Lanche 1</h1>
          <p className='text-gray-500 text-sm text-center'>Lorem</p>
          <h2 className='text-gray-900 text-2xl font-bold'>R$24,99</h2>
          <button className='bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:shadow-xl hover:scale-105'>Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

export default Product;
