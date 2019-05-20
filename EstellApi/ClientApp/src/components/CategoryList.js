import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

import "../styles/CategoryList.css"

class CategoryList extends Component {

    render() {
   const category = "molecules";
        return (
            <div className="category-container">
                <div className="category-line">
                    <Link to={'bubbleezz'}>
                        <div className="category-item bubbleezz"></div>
                    </Link>
                    <Link to={`molecules`}>
                        <div className="category-item fluffables"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item fuzzeez"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`products`}>
                        <div className="category-item glitter-petz"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item molecules"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item plush-craft"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`products`}>
                        <div className="category-item squishies"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item sticky-mosaics"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item stick-n-style"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`products`}>
                        <div className="category-item mocheez"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item odditeez"></div>
                    </Link>
                    <Link to={`products`}>
                        <div className="category-item slimi-cafe"></div>
                    </Link>
                </div>
              
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({products: state.products });

// export default connect(mapStateToProps)(ProductList);

export default CategoryList;