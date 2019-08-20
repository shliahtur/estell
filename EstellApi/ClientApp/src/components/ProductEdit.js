import React from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../actions';


class ProductEdit extends React.Component {


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const product = {

    }
    this.props.updateProduct(product);
  };

  handleCancel = () => {
    this.props.history.push(`/products/${this.props.product.Id}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>      
          <button type="submit" className="btn btn-dark">Update</button>
          <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { updateProduct };

const mapStateToProps = (state) => ({ product: state.product});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);