import React, { useEffect, useState } from 'react';
import { AuthContext } from './AunContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
    },[])
    const userInfo={
       setUser,
        createUser
    }
    console.log(user)
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;