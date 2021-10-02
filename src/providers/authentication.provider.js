import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
 
const GoogleAuthContext = React.createContext();

const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
 
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}
 
const useGoogleAuth = () => React.useContext(GoogleAuthContext);

export {
  GoogleAuthProvider,
  useGoogleAuth,
}
