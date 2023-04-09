import React, { useState } from 'react'
import Product from '../Product';

const ProductList = () => {
  const [categoriaTab, setCategoriaTab] = useState ("Lanches");

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        
        {/* menu categoia */}
        <div className='flex items-center justify-center space-x-6'>
            <p className={categoriaTab === "Lanches" ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab ('Lanches')}>Lanches</p>
            <p className={categoriaTab === "Pizzas" ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab ('Pizzas')}>Pizzas</p>
            <p className={categoriaTab === "Oriental" ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab ('Oriental')}>Oriental</p>
        </div>
            {/*lista de produtos*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </section>
  )
}

export default ProductList;
