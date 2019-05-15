import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import {products} from '../data/tempProducts';

import "../styles/Products.css"

class ProductList extends Component {

  render() {
    if(products.length) {
      return (
        <div className="products-container">
          {products.map(product => {
            return (
              <div className="product-item" key={ product.id }>   
                <img className="product-item_img" src={product.imagePath} height={"200px"} alt={product.name} />        
                <h4>< Link className="produc-item_name" to={`/products/${product.id}`}>{product.name}</Link></h4>
                <p className="product-item_description">what a great toy</p>
                <p className="product-item_price">{product.price}</p>
                <p className="product-item_article">{product.vendorCode}</p>
                <span className="product-item_age">{product.age}</span>
              </div>
              
            );
          })}
        </div>
      )    
    } else {
      return ( <Preloader />)
    }
  }
}

// const mapStateToProps = (state) => ({ products: state.products });

// export default connect(mapStateToProps)(ProductList);

export default ProductList;