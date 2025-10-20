import React, { useEffect, useState } from 'react';
import { AuthContext } from './AunContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signIN=(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
       return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
        return unsubscribe;
    },[])
    const userInfo={
        user,
       setUser,
        createUser,
        logOut,
        signIN
    }
    
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;