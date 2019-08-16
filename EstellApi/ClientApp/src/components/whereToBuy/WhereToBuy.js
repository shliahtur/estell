import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../../styles/WhereToBuy.css"

class WhereToBuy extends Component {

    render() {
        return (
            <div className="where-to-buy_container">
             <Link to={`stores`}>
            <button className="where-to-buy_button where-to-buy_button__left"></button>
             </Link>
             <Link to={`e-commerce`}>
            <button  className="where-to-buy_button where-to-buy_button__right"></button> 
            </Link>
           </div>
        )
    } 
}
export default WhereToBuy