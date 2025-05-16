import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthenticatedRoute: FC = ({ children }:any) => {
    const authToken = localStorage.getItem('authToken');
    const location = useLocation();
  
    // Check if authToken is present and allow access to the wrapped component
    if (authToken) {
      return children;
    }
  
    // Redirect to the login page or a fallback page
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  };