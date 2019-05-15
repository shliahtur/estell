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
                <img src={product.imagePath} height={"200px"} alt={product.name} />        
                <h4><Link to={`/products/${product.id}`}>{product.name}</Link></h4>
                <p>{product.price}</p>
                <p>{product.vendorCode}</p>
                <p>{product.age}</p>
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