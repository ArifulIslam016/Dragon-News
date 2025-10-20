import React, { useEffect, useState } from 'react';
import { AuthContext } from './AunContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signIN=(email,password)=>{
        setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe;
    },[])
    const userInfo={
        user,
       setUser,
        createUser,
        logOut,
        signIN,
        loading
    }
    
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;