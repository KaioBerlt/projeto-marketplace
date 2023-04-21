import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';




const Login = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        senha:''
    })

    const { loginUser } = useContext(AuthContext);



    const handleChangeValues = (evento) => {
        setInputValues ({
            ...inputValues,
            [evento.target.name]: evento.target.value
        })
        console.log(inputValues)
    };

   
    const handleSubmit = async (event) => {
        event.preventDefault()
        loginUser (inputValues)

        

    };
    
    return(

        <section className="home-banner w-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-2 space-x-2 gap-y-1 py-12 ">
        
        <div>
            <label htmlFor="">Email:</label>
                <input className="border border-black rounded-full" 
                type="email"
                name="email"
                value={inputValues.email}
                onChange={handleChangeValues} />
            </div>
            <div>
            <label htmlFor="">Senha:</label>
                <input className="border border-black rounded-full" 
                type="password"
                name="senha" 
                value={inputValues.senha}
                onChange={handleChangeValues}/>
            </div>
            <button type="submit" className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105'>Login</button>
            <p className='text-violet-950 hover:underline'><Link to='/cadastro'>Cadastre-se Aqui!</Link></p>
        </form>
        
        </section>
        
    )
};

export default Login;