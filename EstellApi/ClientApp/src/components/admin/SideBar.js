import React, { Component } from 'react';
import '../../styles/SideBar.css';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    
    render() {
        const {url} = this.props
        return (
            <div className="side-bar">
                <NavLink to="/admin">
                    <button type="button"
                    className={url =="/admin"? "sidebar-btn-selected" : ""}
                    >Каталог</button>
                </NavLink>

                <NavLink to="/">
                    <button type="button">На сайт</button>
                </NavLink>      
                
                <NavLink to="/admin/rozetka">
                    <button type="button"
                     className={url =="/admin/rozetka"? "sidebar-btn-selected" : ""}
                    >Розетка</button>
                   
                </NavLink>          
            </div>

        );
    }
}

export default SideBar;