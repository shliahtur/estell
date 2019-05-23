import React, { Component } from 'react';
import Preloader from '../Preloader';
import { Link } from 'react-router-dom';

import "../../styles/WhereToBuy.css"

class Ecommerce extends Component {

    render() {
        return (
            <div>
            <Link to={`where-to-buy`}>
            <button>Назад</button>
             </Link>
            <div className="ecommerce-list">
            <ul>
                <li>Антошка</li>
                <li>Bi</li>
                <li>Панама</li>
            </ul>
            </div>
            </div>
        )
    }
}
export default Ecommerce