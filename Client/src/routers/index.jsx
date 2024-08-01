import { createBrowserRouter, Outlet } from 'react-router-dom'
import AuthProvider from '../Context/AuthProvider'
import Login from '../pages/login'
import Home from '../pages/home'
import ProtectedRoute from './Protected.route'
import ErrorPage from '../pages/errorPage'

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
    return <AuthProvider><Outlet /></AuthProvider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: '/'
                    }
                ]
            }
            
        ]
    }
]);
