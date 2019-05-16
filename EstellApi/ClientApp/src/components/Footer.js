import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';


export default props => (

    <div className="footer">
        <div className="container">
            <div className="foo-contacts">
                Estell (c) 2019
        </div>
            <br></br>
            <Link to={'/'}>Бренды</Link>
            <Link to={'/fetchdata'}>Прайс-лист</Link>
            <Link to={'/cart'}>Контакты</Link>
<<<<<<< HEAD
=======
            <Link to={'/products'}>Каталог</Link>
>>>>>>> 20b33a6b66e9667d80687ce54199f26e9aba1ee8
        </div>

    </div>

);

