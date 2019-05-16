import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

export default props => (

  <div className="container">
    <nav className="nav">
      <Link className="nav_logo" to={'/'}></Link>
      <Link className="nav_link" to={'/counter'}>Новости</Link>
      <Link className="nav_link" to={'/fetchdata'}>Прайс-лист</Link>
      <Link className="nav_link" to={'/cart'}>Где купить?</Link>
      <Link className="nav_link" to={'/cart'}>Контакты</Link>
      <Link className="nav_link" to={'/'}>Бренды</Link>

      <div className="nav-icons">
        <a className="nav-icons_item phone-icon" href="tel:0667469590"></a>
        <div className="nav-icons_item search-icon"></div>
        <div className="nav-icons_item cart-wr">
          <Link className="cart-icon" to={'/cart'}></Link>
          <span className ="cart-quantity">4</span>
        </div>
        
      </div>
    </nav>
  </div>
);

