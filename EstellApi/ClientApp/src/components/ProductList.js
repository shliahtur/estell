import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import {products} from '../data/tempProducts';

class ProductList extends Component {

  render() {
    if(products.length) {
      return (
        <div>
        
          {products.map(product => {
            return (
              <div key={ product.id }>
                <hr/>    
                  
                <img src={product.imagePath} height={"200px"} alt={product.name} />        
                <h4><Link to={`/products/${product.id}`}>{product.id}: {product.name}</Link></h4>
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