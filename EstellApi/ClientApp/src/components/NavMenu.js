import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


export default props => (

  <div className="container">
    <nav className="nav">
          <Link className="nav-logo" to={'/'}></Link>
          <Link to={'/'} exact>Бренды</Link>
          <Link to={'/counter'}>Счетчик</Link>
          <Link to={'/fetchdata'}>Погода</Link>
          <Link to={'/cart'}>Корзина</Link>
    </nav>
  </div>
);

