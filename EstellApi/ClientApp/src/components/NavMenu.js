﻿import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


export default props => (

  <div className="container">
    <nav className="nav">
          <Link className="nav-logo" to={'/'}></Link>
          <Link to={'/'} exact>Бренды</Link>
          <Link to={'/counter'}>Новости</Link>
          <Link to={'/fetchdata'}>ggg</Link>
          <Link to={'/cart'}>vadim лох</Link>
    </nav>
  </div>
);

