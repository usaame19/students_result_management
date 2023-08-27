import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useApp from '../Hooks/UseApp';

const Protected = ({children}) => {
    const { state } = useApp();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!state.auth.isAuthenticated) {
        navigate("/login");
      }
    }, [state]);
  return (
    <div>
      {children}
    </div>
  )
}

export default Protected
