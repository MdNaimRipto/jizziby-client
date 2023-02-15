import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth"
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider(auth)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createAccountWithEmailAndPassword = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailAndPassword = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logout = () => {
        localStorage.removeItem("token")
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return unsubscribe;
    }, [])

    const authInfo = {
        user,
        setUser,
        loader,
        loginWithGoogle,
        createAccountWithEmailAndPassword,
        loginWithEmailAndPassword,
        updateUserProfile,
        logout

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;