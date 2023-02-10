import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BsGoogle } from "react-icons/bs"
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const PopupLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("Login Successful", {
                    duration: 4000,
                    style: {
                        background: '#333',
                        color: '#fff',
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                toast.error(`${error.message}. Please Try Again`, {
                    duration: 4000,
                    style: {
                        background: '#333',
                        color: '#fff',
                        border: '1px solid #80808082',
                        boxShadow: "none",
                        width: "350px",
                        borderRadius: "10px"
                    },
                })
            })
    }
    return (
        <button
            onClick={handleGoogleLogin}
            className='flex items-center justify-center w-full btn btn-outline hover:btn-primary rounded-md'>
            <BsGoogle className='text-xl mr-2' />
            <p>Login With Google</p>
        </button>
    );
};

export default PopupLogin;