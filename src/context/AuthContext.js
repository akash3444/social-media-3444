import {createContext} from 'react'

const AuthContext = createContext();

const login = async ({ username, password }) => {
    
}

const AuthProvider = ({ children }) => {
    return (<AuthContext.Provider value={{user: null, login: () => {}, register: () => {}}}>
        {children}
    </AuthContext.Provider>)
}