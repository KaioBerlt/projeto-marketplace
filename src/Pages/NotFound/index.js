import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="home-banner w-full">
        <div>
           <h1 className="text-center text 3xl md:text-4xl lg:text-5xl font-semibold py-10">Ops... Algo deu errado</h1>
           <h2 className='text-center'>404 - Not Found</h2>
           <p className='text-center font-bold cursor-pointer '><Link to='/'>Voltar</Link></p> 
        </div>
        </section>
    )
};

export default NotFound;