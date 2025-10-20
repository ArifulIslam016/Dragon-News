import React, { use, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AunContext';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';


const PrivateProvider = ({children}) => {
    const {user,loading}=use(AuthContext)
    // console.log(user)
    if(loading){
        return <Loading></Loading>
    }

   if(user&& user?.email){

       return children;
   }
   else{
   return <Navigate to={'/auth/login'}></Navigate>
   }
};

export default PrivateProvider;