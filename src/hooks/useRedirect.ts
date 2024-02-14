import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

export const useRedirect = (path: string, redirectTo: string) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => { 
    if(pathname === path) {
      navigate(redirectTo)
    }
  }, [pathname, navigate, path, redirectTo]);
}
