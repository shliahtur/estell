import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, deleteProduct, getCategories } from "../../actions";
import ProductDetails from "./ProductDetails";
import NewProduct from './NewProduct';
import DeleteProduct from './DeleteProduct';
import SideBar from "./SideBar";
import "../../styles/Admin.css";


class Admin extends Component {

  state = {
    isOpenEdit: false,
    isOpenNew: false,
    isOpenDelete: false,
    selectedProduct: '',
    selectedDeleteProductId: '',
  };

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
  }


  productDetails = (event, product) => {
    if(!event.target.classList.contains("action-btn")){
      this.setState({ isOpenEdit: true, selectedProduct: product });
    }
  };

  newProduct = () => {
    this.setState({
      isOpenNew: true
    })
  }

  handleSubmit = () => {
    this.setState({ isOpenEdit: false });
  };

  handleDelete = () => {
    this.setState({ isOpenDelete: false,  });
    this.props.deleteProduct(this.state.selectedDeleteProductId)
  }

  handleCancel = e => {
    if (
      e.target.className === "modalOverlay" ||
      e.target.className === "close-btn"
    ) {
      this.setState({ isOpenNew: false, isOpenEdit: false, isOpenDelete: false });
    }
  };

  openDeleteModal = (event, id) => {
    event.preventDefault();
    this.setState({
       isOpenDelete: true,
       selectedDeleteProductId: id
      });
  }

  render() {
    return (
      <div>
        <SideBar />
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
                <td></td>
              </tr>
            </thead>

            {
              this.props.products.length > 0  ?
                <tbody>
                  {
                    this.props.products.map(product => {
                      return (
                        <tr key={product.id} onClick={(event) => this.productDetails(event, product)}>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{product.category}</td>
                          <td>{product.vendorCode}</td>
                          <td>{product.age}</td>
                          <td>
                            <img
                              className="admin-product-item_img"
                              src={process.env.PUBLIC_URL + `/Products/${product.images[0].name}`}
                              height={"50px"}
                              alt={product.name}
                            />
                          </td>
                          <td>
                            <div className="btn-container">
                              <div className="delete-btn-icon"></div>
                              <button className="action-btn delete-btn" type="button" onClick={event => this.openDeleteModal(event, product.id)}></button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>

                :
                null
            }
          </table>
          {
            <ProductDetails
              product={this.state.selectedProduct}
              isOpen={this.state.isOpenEdit}
              onCancel={this.handleCancel}
              onSubmit={this.handleSubmit}
              categories={this.props.categories}
            />
          }
          {
            <NewProduct
              isOpen={this.state.isOpenNew}
              onCancel={this.handleCancel}
            >
            </NewProduct>
          }
          {
            <DeleteProduct
              isOpen={this.state.isOpenDelete}
              onCancel={this.handleCancel}
              onDelete={this.handleDelete}
              withDeleteBtns={true}
            >
            </DeleteProduct>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products, categories: state.categories });
const mapDispatchToProps = { getProducts, deleteProduct, getCategories };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
