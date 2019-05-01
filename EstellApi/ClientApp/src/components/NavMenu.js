import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

export default props => (

  <div className="container">
    <nav className="nav">
      <Link className="nav-logo" to={'/'}></Link>
      <Link to={'/'} exact>Бренды</Link>
      <Link to={'/counter'}>Новости</Link>
      <Link to={'/fetchdata'}>Прайс-лист</Link>
      <Link to={'/cart'}>Где купить?</Link>
      <Link to={'/cart'}>Контакты</Link>
   
      <div className="nav-icons">
      <a className="phone-icon" href="tel:0667469590"></a>
      <div className="search-icon"></div>
      <Link className="cart-icon" to={'/cart'}></Link>
    </div>
    </nav>
  </div>
);

