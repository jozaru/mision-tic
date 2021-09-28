import React from 'react';
import './App.scss';
import Routes from 'routes/routes.component';
import { BrowserRouter } from 'react-router-dom';

// components
import Menu from 'components/menu/menu.component';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <header>
        <section className="content">
          <Menu />
        </section>
        </header>
        <section className="main-content">
          <section className="content">
            <Routes />
          </section>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
