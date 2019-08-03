import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../styles/CategoryList.css"

class CategoryList extends Component {

    render() {
        return (
            <div className="category-container">
                <div className="category-line">
                    <Link to={'category/bubbleezz'}>
                        <div className="category-item bubbleezz"></div>
                    </Link>
                    <Link to={`category/molecules`}>
                        <div className="category-item fluffables"></div>
                    </Link>
                    <Link to={`category/fuzzeez`}>
                        <div className="category-item fuzzeez"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`category/glitter-petz`}>
                        <div className="category-item glitter-petz"></div>
                    </Link>
                    <Link to={`category/molecules`}>
                        <div className="category-item molecules"></div>
                    </Link>
                    <Link to={`category/plush-craft`}>
                        <div className="category-item plush-craft"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`category/squishies`}>
                        <div className="category-item squishies"></div>
                    </Link>
                    <Link to={`category/sticky-mosaics`}>
                        <div className="category-item sticky-mosaics"></div>
                    </Link>
                    <Link to={`category/stick-n-style`}>
                        <div className="category-item stick-n-style"></div>
                    </Link>
                </div>
                <div className="category-line">
                    <Link to={`category/mocheez`}>
                        <div className="category-item mocheez"></div>
                    </Link>
                    <Link to={`category/odditeez`}>
                        <div className="category-item odditeez"></div>
                    </Link>
                    <Link to={`category/slimi-cafe`}>
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