import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import PopupLogin from './PopupLogin';

const Login = () => {
    const [error, setError] = useState("")
    const { loginWithEmailAndPassword, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                setUser(result.user)
                console.log(user)
                form.reset()
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
                setError(error.message)
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
        <div className='login-container'>
            <div className='login-form'>
                <div className='login'>
                    <h2 className='text-center mb-4'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="inputGroup">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" />
                        </div>
                        <div className="inputGroup">
                            <button type="submit">login</button>
                        </div>
                    </form>
                    <div className='login-footer'>
                        <p className='switch'>Don't have an account?
                            <Link to="/register">Signup</Link>
                        </p>
                        <div className='social-section'>
                            <p>Or</p>
                            <PopupLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;