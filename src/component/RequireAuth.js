import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Auth";

import React from 'react'

const RequireAuth = ({children}) => {
    const auth= useAuth();
    const location= useLocation();
    if(!auth.user){
        return <Navigate to='/signup'state={{path: location.pathname}} />
    }
    
  return children;
}

export default RequireAuth
