import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


export default props => (

  <nav className="nav-wrapper">

        <Link className="nav-logo" to={'/'}></Link>

        <Link to={'/'} exact>На главную</Link>

        <Link to={'/counter'}>Счетчик</Link>

        <Link to={'/fetchdata'}>Погода</Link>

        <Link to={'/cart'}>Корзина</Link>

      </nav>
);

