import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct} from '../actions';

class ProductInfo extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <p>{product.imagePath}</p>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);