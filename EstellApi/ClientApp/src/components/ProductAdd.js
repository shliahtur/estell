import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';


class ProductAdd extends React.Component {

  state = {

  };
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state);
  };


  render() {
 
    return (
      <div>
        <h1>Новый документ</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-block">

         <input type="text" />

            </div>
          </div>
          <button type="submit" className="btn btn-dark">Create</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addProduct };

export default connect(mapDispatchToProps)(ProductAdd);