import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Layout } from '../components/Layout'
import { Login } from '../components/Login'
import { PostList } from '../components/PostList'
import { Register } from '../components/Register'
import { useAuth } from '../hooks/use-auth'
import {Profile} from '../components/profile';

const Index = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<RequireAuth><PostList /></RequireAuth>} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path=":username" element={<Profile />} />
                <Route path="*" element={<RequireAuth><PostList /></RequireAuth>} />
            </Routes>
        </Layout>
    )
}


const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation()
    return auth.user ? children : <Navigate to="/login" state={{ from: location }} />
}

export default Index
