import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';


export default props => (

    <div className="footer">
        <div className="foo-contacts">
            Estell (c) 2019
        </div>
        <br></br>
        <Link to={'/'} exact>Бренды</Link>
        <Link to={'/counter'}>Новости</Link>
        <Link to={'/fetchdata'}>Прайс-лист</Link>
        <Link to={'/cart'}>Контакты</Link>
    </div>

);

