import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

class ProductList extends Component {

  render() {
    if(this.props.products.length) {
      return (
        <div>
        
          {this.props.products.map(product => {
            return (
              <div key={ product.id }>
                <hr/>          
                <h4><Link to={`/products/${product.id}`}>{product.id}: {product.name}</Link></h4>
                <p>{product.price}</p>
                <p>{product.vendorCode}</p>
                <p>{product.age}</p>
                <p>{product.imagePath}</p>
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

export default connect(mapStateToProps)(ProductList);