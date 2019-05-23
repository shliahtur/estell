import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import { getProductsByCategory } from '../actions';

import "../styles/Products.css"

class ProductList extends Component {
  componentDidMount() {
    this.props.getProductsByCategory(this.props.match.params.catname);
  }
  
  render() {
    if(this.props.products.length) {
      return (
        <div className="products-container">
          {this.props.products.map(product => {
            return (
              <div className="product-item" key={ product.id }>   
                <img className="product-item_img" src={product.imgPath} height={"200px"} alt={product.name} />        
                <h4><Link className="product-item_name" to={`/products/${product.id}`}>{product.name}</Link></h4>
                <p className="product-item_description">{product.description}</p>
                <div className="product-item_price-line">
                  <p className="product-item_price">{product.price} грн</p>
                  <button className="product-item_cart"></button>
                </div>
                <p className="product-item_article">{product.vendorCode}</p>
                <span className="product-item_age product-item_age__yellow">{product.age}</span>
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


const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { getProductsByCategory };

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
