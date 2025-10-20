import React, { use, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AunContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';


const PrivateProvider = ({children}) => {
    const {user,loading}=use(AuthContext)
    // console.log(user)
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }

   if(user&& user?.email){

       return children;
   }
   else{
   return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
   }
};

export default PrivateProvider;