import React from "react";
import { Link } from 'react-router-dom';

// styles
import './menu.styles.scss';

const Menu = () => {
  return (
      <nav className="menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
        </ul>
      </nav>
  );
};

export default Menu;
