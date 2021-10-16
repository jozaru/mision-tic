import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// context
import { useGoogleAuth } from "./authentication.provider";

const ApiContext = React.createContext({});

const ApiProvider = ({ children }) => {
  const [tokenId, setTokenId] = useState();
  const { signOut } = useGoogleAuth();
  const history = useHistory();
  const serviceCall = async (endpoint, method, tokenId, request) => {
    const url = `${process.env.REACT_APP_API_URL}${endpoint}`;
    const response = await fetch(url, {
      method,
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokenId,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const status = response.status;
      switch (status) {
        case 401:
          signOut();
          history.push('/login');
          break;
        case 403:
          history.push('/no-access');
          break;
        default:
          throw new Error();
      }
    }
  };

  const GETCall = url => {
    return serviceCall(url, 'GET', tokenId);
  };

  const POSTCall = (url, request) => {
    return serviceCall(url, 'POST', tokenId, request);
  };

  const DELETECall = url => {
    return serviceCall(url, 'DELETE', tokenId);
  };
  
  const PUTCall = (url, request) => {
    return serviceCall(url, 'PUT', tokenId, request);
  };

  const value = { 
    serviceCall, 
    GETCall, 
    POSTCall,
    DELETECall,
    PUTCall,
    setTokenId,
    tokenId,
  };

  return (
    <ApiContext.Provider value={value} >
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => React.useContext(ApiContext);

export {
  ApiProvider,
  useApi,
}