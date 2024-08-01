/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
// Tạo context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Khởi tạo user là null
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onIdTokenChanged((user) => {
            console.log("From authProvider", { user });
            if(user?.uid){
                setUser(user); 
                localStorage.setItem('accessToken', user.accessToken)
                return;
            }
            setUser({});
            localStorage.clear();
            navigate('/login')
            
        });

        return () => {
            unsubscribe(); 
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, setUser }}> 
            {children}
        </AuthContext.Provider>
    );
}
