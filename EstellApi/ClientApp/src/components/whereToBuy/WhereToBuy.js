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
            <div className="whereToBuy-container">
                <button data-name={1} onClick={this.handleTab}>Роздрібні магазини</button>
                <button data-name={2} onClick={this.handleTab}>Інтернет</button>
                {activeTab === 1 &&  <Ecommerce />}
                {activeTab === 2 &&  <Stores />}
            </div>

        )
    }
}
export default WhereToBuy