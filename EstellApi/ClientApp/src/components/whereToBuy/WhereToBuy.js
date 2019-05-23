import React, { Component } from 'react';
import Preloader from '../Preloader';
import Ecommerce from './Ecommerce';
import Stores from './Stores';

import "../../styles/WhereToBuy.css"

class WhereToBuy extends Component {
    state= {
        activeTab: 1,
    }
    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name')
        })
    }

    render() {
        const {activeTab} = this.state
        return (
            <div className="where-to-buy_container">
                <button className="where-to-buy_button where-to-buy_button__left" data-name={1} onClick={this.handleTab}></button>
                <button  className="where-to-buy_button where-to-buy_button__right" data-name={2} onClick={this.handleTab}></button>
                {activeTab === 1 &&  <Stores />}
                {activeTab === 2 &&  <Ecommerce />}
            </div>

        )
    } 
}
export default WhereToBuy