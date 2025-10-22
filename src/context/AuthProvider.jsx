import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const signUpWithEmailAndPass = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password) 
    }
    const signInWithEmailAndPass= (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
        })
    },[])

    const authInfo = {
        user,
        setUser,
      signUpWithEmailAndPass,
      signInWithEmailAndPass
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;