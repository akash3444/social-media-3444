import { createContext, useContext, useEffect, useState } from "react";
import Axios from 'axios';
import { useMutation } from "react-query";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

const loginUser = async (user) => {
    const { data } = await Axios.post('https://k9io8.sse.codesandbox.io/users/login', user)
    return data;
}


const registerUser = async (user) => {
    // console.log('register args', user)
    const { data } = await Axios.post('https://k9io8.sse.codesandbox.io/users/register', user)
    return data;
}

const useProvideAuth = () => {
    const userData = localStorage.getItem('user')
    const [user, setUser] = useState(userData && JSON.parse(userData));
    const { isLoading: isLogging, error: loginError, mutate: login } = useMutation(loginUser, {
        onSuccess: loginResponse => {
            setUser(loginResponse);
            localStorage.setItem('user', JSON.stringify(loginResponse))
        }
    })

    const { isError, isLoading, data, mutate: register } = useMutation(registerUser, {
        onSuccess: data => console.log('Register response', data),
        onError: error => console.error(error.response)
    })

    // useEffect(() => {
    //     console.log('user', user)
    // }, [user, setUser])

    // const register = async (userData) => {
    //     try {
    //         const { data } = await Axios.post('https://k9io8.sse.codesandbox.io/users/register', userData)
    //         return { data, error: null };
    //     } catch (error) {
    //         return { data: null, error };
    //     }
    // }

    return { user, login, isLogging, loginError, register }
}