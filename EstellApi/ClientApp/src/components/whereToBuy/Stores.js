import React, { Component } from 'react';
import Preloader from '../Preloader';
import Map from './Map';

import "../../styles/WhereToBuy.css"

class Stores extends Component {

    render() {
        return (
            <React.Fragment>
                <Map/>
                <div className="cities-list">
                    <ul>
                        <li>Киев</li>
                        <li>Житомир</li>
                        <li>Одесса</li>
                        <li></li>
                    </ul>
                </div>
            </React.Fragment>

        )
    }
}
export default Stores