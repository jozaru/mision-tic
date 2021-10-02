import React, { useCallback, useEffect } from 'react';
import './App.scss';
import Routes from 'routes/routes.component';

// context
import { useGoogleAuth } from 'providers/authentication.provider';
import { useApi } from 'providers/api.provider';

// components
import Menu from './components/menu/menu.component';
import Logout from 'components/logout/logout.component';

function App() {
  const { isInitialized, isSignedIn, googleUser } = useGoogleAuth();
  const { setTokenId } = useApi();
  const setTokenIdCallback = useCallback(tokenId => setTokenId(tokenId), [setTokenId]);

  useEffect(() => {
    if(googleUser) {
      setTokenIdCallback(googleUser.tokenId);
    }
  }, [googleUser, setTokenIdCallback]);

  return (
    <section className="main">
      <header>
      <section className="content grid-content">
        <Menu />
        {isInitialized && (isSignedIn ? <Logout /> : <></>)}
      </section>
      </header>
      <section className="main-content">
        <section className="content">
          <Routes />
        </section>
      </section>
    </section>
  );
}

export default App;
