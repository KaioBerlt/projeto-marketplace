import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };
    
    return(

        <section className="home-banner w-full">
        <form className="flex flex-col items-center justify-center space-y-2 space-x-2 gap-y-1 py-12 " onSubmit ={handleSubmit}>
        
        <div>
            <label htmlFor="">Email:</label>
                <input className="border border-black rounded-full" type="email" />
            </div>
            <div>
            <label htmlFor="">Senha:</label>
                <input className="border border-black rounded-full" type="password" />
            </div>
            <button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105' type="submit">Login</button>
            <p className='text-violet-950'><Link to='/cadastro'>Cadastre-se Aqui!</Link></p>
        </form>
        
        </section>
        
    )
};

export default Login;