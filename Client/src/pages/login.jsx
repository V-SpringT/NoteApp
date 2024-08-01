/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {Button, Typography} from '@mui/material'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const auth = getAuth();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate() 

    const handleLoginWithGG = async ()=>{
        const provider = new GoogleAuthProvider();

        const res = await signInWithPopup(auth, provider);
        console.log(res);
    }
    if(user?.uid){
        navigate('/')
        return;
    }
    return (
        <>  
            <Typography variant='h5' sx={{marginBottom: '10px'}}>Well come to Note App</Typography>
            <Button variant='outlined' onClick={handleLoginWithGG}>Login with Google</Button>
        </>
    )
};

export default Login;
