import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setloading]=useState(true)

    const signUpWithEmailAndPass = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password) 
    }
    const signInWithEmailAndPass= (email,password) =>{
        setloading(loading)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutfunc = () =>{
        setloading(true)
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
            setloading(false)
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
      profile,
      loading
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;