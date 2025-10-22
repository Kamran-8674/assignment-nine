import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
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
    const profile = (displayName,photoURL) =>{
        return updateProfile(auth.currentUser,{
         displayName,
         photoURL
        })

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
      signOutfunc,
      profile
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;