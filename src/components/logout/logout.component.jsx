import React from 'react';
import { useHistory } from 'react-router-dom';

// context
import { useGoogleAuth } from 'providers/authentication.provider';
import { useApi } from 'providers/api.provider';

// styles
import './logout.styles.scss';

const Logout = () => {
  const history = useHistory();
  const { signOut, googleUser: { profileObj } } = useGoogleAuth();
  const { setTokenId } = useApi();
  const handleClick = async () => {
    setTokenId();
    await signOut();
    history.push('/');
  };
  
  return (
    <section className="logout-container">
      {profileObj.name}
      <button onClick={handleClick}>Salir</button>
    </section>
  );
};

export default Logout;