import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Cadastro = () => {
    const [inputValues, setInputValues] = useState({
        nome: '',
        email: '',
        senha:'',
        imagem: '',
        admin: false
    })
    const navigate = useNavigate();



    const handleChangeValues = (evento) => {
        setInputValues ({
            ...inputValues,
            [evento.target.name]: evento.target.value
        })
        console.log(inputValues)
    };

   
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(inputValues)
        const response = await registerUser(inputValues);
        if(response.data) {
            alert(`Usuario ${response.data.nome} cadastrado com sucesso!`)
            navigate('/login')
        }

        

    };

    return (
        <section className="home-banner w-full">

        <form  className="flex flex-col items-center justify-center space-y-2 space-x-2 gap-y-1 py-3" onSubmit ={handleSubmit}>
            <div>
                <label htmlFor="">Nome:</label>
                <input className="w-full border border-black rounded-full" 
                type="text"
                name='nome' 
                onChange={handleChangeValues}/>
            </div>
            <div>
            <label htmlFor="">Email:</label>
                <input className="w-full border border-black rounded-full" 
                type="email"
                name='email'
                onChange={handleChangeValues} />
            </div>
            <div>
            <label htmlFor="">Senha:</label>
                <input className="w-full border border-black rounded-full" 
                type="password"
                name='senha'
                onChange={handleChangeValues} />
            </div>
            <div>
                <label htmlFor="">Imagem:</label>
                <input className="w-full border border-black rounded-full" 
                type="text" 
                name='imagem'
                onChange={handleChangeValues}/>
            </div>
            <button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105 bottom-1 top-1' type="submit">Registrar</button>
            <p className="text-violet-950"><Link to='/login'>Já Posui Cadastro?</Link></p>
        </form>
        
        </section>
    )
};

export default Cadastro;