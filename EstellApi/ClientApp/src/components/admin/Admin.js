import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions";
import Preloader from "../Preloader";
import ProductDetails from "./ProductDetails";
import NewProduct from './NewProduct';

import "../../styles/Admin.css";

class Admin extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  state = {
    isOpenEdit: false,
    isOpenNew: false,
    selectedProduct: ''
  };

  productDetails = (product) => {
    this.setState({ isOpenEdit: true, selectedProduct: product });
  };

  newProduct = () => {
    this.setState({
      isOpenNew: true
    })
  }

  handleSubmit = () => {
    this.setState({ isOpenEdit: false });
  };

  handleCancel = e => {
    if (
      e.target.className === "modalOverlay" ||
      e.target.className === "close-btn"
    ) {
      this.setState({ isOpenNew: false, isOpenEdit: false });
    }
  };

  render() {
      return (
        <div className="admin-table-container">
          <button className="circle-btn" onClick={this.newProduct}></button>
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
              isOpen={this.state.isOpenEdit}
              onCancel={this.handleCancel}
              onSubmit={this.handleSubmit} 
            />    
         }
         {
           <NewProduct
               isOpen={this.state.isOpenNew}
               onCancel={this.handleCancel}
               >
           </NewProduct>
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
