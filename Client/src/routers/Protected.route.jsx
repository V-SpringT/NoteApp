/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRoute({children}){
    const navigate = useNavigate();
    if(!localStorage.getItem('accessToken')){
        navigate('/login')
        return;
    }
    return (
        <Outlet />
    )
}