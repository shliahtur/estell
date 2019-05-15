import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

import "../styles/CategoryList.css"

class CategoryList extends Component {

    render() {

        return (
            <div className="category-container">
                <div className="category-line">
                    <Link to={`cat`}>
                        <div className="category-item bubbleezz"></div>
                    </Link>
                    <Link to={`cat`}>
                        <div className="category-item fluffables"></div>
                    </Link>
                    <Link to={`cat`}>
                        <div className="category-item fuzzeez"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`cat`}>
                        <div className="category-item glitter-petz"></div>
                    </Link>
                    <Link to={`cat`}>
                        <div className="category-item molecules"></div>
                    </Link>
                    <Link to={`cat`}>
                        <div className="category-item plush-craft"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`cat`}>
                        <div className="category-item squishies"></div>
                    </Link>
                    <Link to={`cat`}>
                        <div className="category-item sticky-mosaics"></div>
                    </Link>
                    <Link to={`cat`}>
                        <div className="category-item stick-n-style"></div>
                    </Link>
                </div>
                <Link to={`cat`}>
                    <div className="category-item stick-n-style"></div>
                </Link>
            </div>

        )
    }
}


// const mapStateToProps = (state) => ({products: state.products });

// export default connect(mapStateToProps)(ProductList);

export default CategoryList;