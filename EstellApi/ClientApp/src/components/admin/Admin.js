import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, deleteProduct, getCategories, getSearchProducts } from "../../actions";
import ProductDetails from "./ProductDetails";
import NewProduct from './NewProduct';
import DeleteProduct from './DeleteProduct';
import LiveSearch from '../Helpers/LiveSearch';
import Input from '../Helpers/Input';
import "../../styles/Admin.css";


class Admin extends Component {

  state = {
    isOpenEdit: false,
    isOpenNew: false,
    isOpenDelete: false,
    selectedProduct: '',
    selectedDeleteProductId: '',
    selectedCategory: '',
    searchString: '',
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

  getSearchProducts = () => {
    this.props.getSearchProducts();
  }

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


  handleSearch = (value) => {
    let text = value.target.value
    this.props.getSearchProducts(text);
    this.setState({
      searchString: text
    })
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

    const {categories, searchProducts, products} = this.props;
    const {selectedCategory, searchString} = this.state;
    const filteredProducts = searchProducts[0] != null ? searchProducts : products

    return (
      <div>
        <div className="admin-table-container">
          <div className="table-header">
         <div className="category-name-wrapper">
          <div className="category-name">
            {selectedCategory ?
                selectedCategory :
                searchString ? "Поиск" :    
                "Все товары"
            }
          </div>
         {filteredProducts.length > 0 ?
          <div className="category-items-counter">{filteredProducts.length}</div>
          :
          null
         }
          </div>
         <div className="search-field">
          <div className="search-icon"></div>
         <Input placeholder="Пошук.." className="search-input" value={searchString} width={300} onChange={this.handleSearch}/>
         </div>

          <button className="add-new-btn" onClick={this.newProduct}>Добавить</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <td></td>
                <td>Изображение</td>
                <td>Артикул</td>
                <td>Наименование</td>
                <td>Цена</td>
                <td>Категория</td>
                <td>Артикул</td>
                <td>Возраст</td>
                <td></td>
              </tr>
            </thead>

            {
               filteredProducts.length > 0  ?
                <tbody>
                  {
                    filteredProducts.map(product => {
                      return (
                        <tr key={product.id} onClick={(event) => this.productDetails(event, product)}>
                          <td><input type="checkbox" /></td>
                          <td>
                            <img
                              className="admin-product-item_img"
                              src={process.env.PUBLIC_URL + `/Products/${product.images[0].name}`}
                              height={"50px"}
                              alt={product.name}
                            />
                          </td>
                          <td>{product.vendorCode}</td>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{
                             categories[0] ?
                              categories.filter(cat => cat.id === product.categoryId)[0].name 
                              : "e"
                            }</td>
                          <td>{product.vendorCode}</td>
                          <td>{product.age}</td>
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

const mapStateToProps = state => ({ products: state.products, categories: state.categories, searchProducts: state.searchProducts });
const mapDispatchToProps = { getProducts, deleteProduct, getCategories, getSearchProducts};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
