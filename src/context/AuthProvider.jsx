import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const signUpWithEmailAndPass = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password) 
    }
    const signInWithEmailAndPass= (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutfunc = () =>{
        return signOut(auth)
    }
    

    useEffect(()=>{
      const unsuscribed =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unsuscribed ()
        }
    },[])

    const authInfo = {
        user,
        setUser,
      signUpWithEmailAndPass,
      signInWithEmailAndPass,
      signOutfunc
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;