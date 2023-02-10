import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import PopupLogin from './PopupLogin';

const Register = () => {
    const [error, setError] = useState("")
    const {
        createAccountWithEmailAndPassword,
        setUser,
        updateUserProfile
    } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        createAccountWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                handleProfileUpdate(name)
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
                setUser(result.user)
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
    const handleProfileUpdate = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
    }


    return (
        <div className='register-container'>
            <div className='register-form'>
                <div className='register'>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    <form onSubmit={handleRegister}>
                        <div className="inputGroup">
                            <label for="Email">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" />
                        </div>
                        <div className="inputGroup">
                            <label for="Email">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="inputGroup">
                            <label for="Password">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" />
                        </div>
                        <div className="inputGroup">
                            <button type="submit">Sign Up</button>
                        </div>
                        <p className='text-red-800 text-center'><small>{error}</small></p>
                    </form>
                    <div className='register-footer'>
                        <p className='switch'>Already have an account?
                            <Link to="/login">Login</Link>
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

export default Register;