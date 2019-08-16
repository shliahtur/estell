import React, { Component } from 'react';
import Preloader from '../Preloader';
import Map from './Map';
import { Link } from 'react-router-dom';

import "../../styles/WhereToBuy.css"

class Stores extends Component {

    render() {
        return (
            <div>
            <Link to={`where-to-buy`}>
            <button>Назад</button>
             </Link>
                <Map/>
                <div className="cities-list">
                    <ul>
                        <li>Киев</li>
                        <li>Житомир</li>
                        <li>Одесса</li>
                        <li></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Stores