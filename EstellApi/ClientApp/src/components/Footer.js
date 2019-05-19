import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';


export default props => (

    <div className="footer">
        <div className="container">
             
           
            <div className="footer-nav">
                <Link to={'/'}>Бренды</Link>
                <Link to={'/fetchdata'}>Прайс-лист</Link>
                <Link to={'/cart'}>Контакты</Link>
                <Link to={'/products'}>Каталог</Link>
            </div>
            <br></br>
            <div className="foo-rights">
                Estell (c) 2019
            </div>
            
        </div>

    </div>

);

