import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../actions";
import Modal from "../Modal";
import Preloader from "../Preloader";
import ProductDetails from "./ProductDetails";

import "../../styles/Admin.css";

class Admin extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  state = {
    isOpen: false,
    selectedProduct: ''
  };

  productDetails = (product) => {
    this.setState({ isOpen: true, selectedProduct: product });
  };

  handleSubmit = () => {
    this.setState({ isOpen: false });
  };

  handleCancel = e => {
    if (
      e.target.className == "modalOverlay" ||
      e.target.className == "close-btn"
    ) {
      this.setState({ isOpen: false });
    }
  };

  render() {
      return (
        <div className="admin-table-container">
          <button className="circle-btn" onClick={this.productDetails}></button>
          <table className="admin-table">
            <thead>
              <tr>
              <td>Наименование</td>
              <td>Цена</td>
              <td>Категория</td>
              <td>Артикул</td>
              <td>Возраст</td>
              <td>Изображение</td>
              </tr>
            </thead>
            <tbody>
            {
              this.props.products.length > 0 ? 
              this.props.products.map(product => {
              return (
                  <tr key={product.id} onClick={() => this.productDetails(product)}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.vendorCode}</td>
                    <td>{product.age}</td>
                    <td>
                      <img
                        className="admin-product-item_img"
                        src={product.imgPath}
                        height={"50px"}
                        alt={product.name}
                      />
                    </td>
                  </tr>
              );
            }) 
            :  
            <Preloader /> 
            }
            </tbody>
          </table>
          {
            <ProductDetails
              product={this.state.selectedProduct}
              isOpen={this.state.isOpen}
              onCancel={this.handleCancel}
              onSubmit={this.handleSubmit} 
            />    
         }
        </div>
      );
  }
}

const mapStateToProps = state => ({ products: state.products });
const mapDispatchToProps = { getProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
