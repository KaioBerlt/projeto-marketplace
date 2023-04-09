import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/products');
    };

    return (
        <section className="home-banner w-full">

        <form className="flex flex-col items-center justify-center space-y-2 space-x-2 gap-y-1 py-3" onSubmit ={handleSubmit}>
            <div>
                <label htmlFor="">Nome:</label>
                <input className="border border-black rounded-full" type="text" />
            </div>
            <div>
            <label htmlFor="">Email:</label>
                <input className="border border-black rounded-full" type="email" />
            </div>
            <div>
            <label htmlFor="">Senha:</label>
                <input className="border border-black rounded-full" type="password" />
            </div>
            <div>
                <label htmlFor="">Endereço:</label>
                <input className="border border-black rounded-full" type="text" />
            </div>
            <button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105 bottom-1 top-1' type="submit">Registrar</button>
            <p className="text-violet-950"><Link to='/login'>Já Posui Cadastro?</Link></p>
        </form>
        
        </section>
    )
};

export default Cadastro;