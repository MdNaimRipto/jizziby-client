import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom"
import Loader from '../Pages/Shared/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return (
            <div className='text-center mt-32'>
                <Loader />
            </div>
        )
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default PrivateRoute;