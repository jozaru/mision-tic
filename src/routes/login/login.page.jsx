import React from 'react';

// context
import { useGoogleAuth } from 'providers/authentication.provider';
import { useApi } from 'providers/api.provider';

// hooks
import useUsers from 'users/hooks/users.hook';

// styles
import './login.styles.scss';

const Login = () => {
  const { signIn } = useGoogleAuth();
  const { setTokenId } = useApi();
  const { signInUser } = useUsers();
  const handleClick = async () => {
    const { tokenId } = await signIn();
    setTokenId(tokenId);
    signInUser(tokenId);
  };
  
  return (
    <section className="login-container">
      <button onClick={handleClick}>Ingresar con google</button>
    </section>
  );
};

export default Login;