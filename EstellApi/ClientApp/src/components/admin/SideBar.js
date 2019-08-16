import React, { Component } from 'react';
import '../../styles/SideBar.css';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <div className="side-bar">
                <NavLink to="/">
                    <button type="button">На сайт</button>
                </NavLink>      
                <NavLink to="/admin">
                    <button type="button">Каталог</button>
                </NavLink>
                <NavLink to="/admin/rozetka">
                    <button type="button">Розетка</button>
                </NavLink>          
            </div>

        );
    }
}

export default SideBar;