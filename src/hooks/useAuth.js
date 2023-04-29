import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, loginUserApi } from "../services/authService";
import api from "../services/api";

const useAuth = () => {

    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userFull, setUserFull] = useState({});
    const navigate = useNavigate();
    

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));

      if (userInfo) {
        api.defaults.headers.common[ 'Authorization' ] = `Bearer ${userInfo.token}`
        findUserById(userInfo.id);
        setUserLogged(true);

      }

      setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const loginUser = async (inputValues) => {
    const response = await loginUserApi(inputValues);
    const data = await response.data;
    console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data))
    api.defaults.headers.common[ 'Authorization' ] = `Bearer ${response.data.token}`
    navigate('/');
    setUserLogged(true);

    
    };

    const logoutUser = () => {
      setUserLogged (false);
      localStorage.clear();
      navigate ('/login');
    }

    const findUserById = async (idUser) => {
      const response = await getUserById(idUser);
      setUserFull(response.data)
      console.log(userFull)
    }

    return { userLogged, userFull, loading, loginUser, logoutUser }

};

export default useAuth;