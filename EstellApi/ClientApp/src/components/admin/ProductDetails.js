import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct, getCategories } from '../../actions';
import Modal from '../Modal';
import Input from '../Helpers/Input';
import '../../styles/Modal.css';

class ProductDetails extends Component {

  state = {
    product: {
      Id: this.props.product.id,
      Name: this.props.product.name,
      CategoryId:  this.props.product.categoryId,
      VendorCode:  this.props.product.vendorCode,
      Price:  this.props.product.price,
      Age:  this.props.product.age,
      Vendor:  this.props.product.vendor,
      Description:  this.props.product.description,
      Images: this.props.product.images,
      categories: [],
      ImagePreviewUrls: []
    }
  }

  componentDidMount() {
    this.props.getCategories()
  }

  componentDidUpdate(prevProps) {
     if (prevProps !== this.props) {
    this.setState({
       product: this.props.product
    })
  }
}
  
  handleChange = (event) => {
    this.setState({
      product: { ...this.state.product,
      [event.target.name]: event.target.value }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id, name, vendorCode, vendor, price, age, description, categoryId, imagePreviewUrls, images } = this.state.product
    const upload = {
      Product:{
        Id: id,
        Name: name,
        Age: age,
        Description: description, 
        Price: price,
        Vendor: vendor,
        VendorCode: vendorCode,
        CategoryId: categoryId,
      },
        Images: [...images]
    }
    this.props.onSubmit();
    this.props.updateProduct(upload);
  };
  shouldComponentUpdate = () => {
    return true
  }
  render() {
    const { product, isOpen, onCancel, categories } = this.props;
    const { name, vendorCode, vendor, price, age, description, categoryId, imagePreviewUrls } = this.state.product

    return (
      <Modal
        isOpen={isOpen}
        onCancel={onCancel}
        children={
          <form onSubmit={this.handleSubmit}>
            <Input width={250} id="Name" label="Название"  name="name" value={name} onChange={this.handleChange} />
                <Input width={250} id="Price" label="Цена" name="price" value={price} onChange={this.handleChange} />
                <Input width={250} id="Description" label="Описание" name="description" value={description} onChange={this.handleChange} />
                <Input width={250} id="Age" label="Возраст"  name="age" value={age} onChange={this.handleChange} />
                <Input width={250} id="VendorCode" label="Артикул" name="vendorCode" value={vendorCode} onChange={this.handleChange} />
                <Input width={250} id="Vendor" label="Бренд" name="vendor" value={vendor} onChange={this.handleChange} />
              
            <select name="CategoryId" value={product.categoryId} onChange={this.handleChange}>
              {categories[0] ? categories.map(el =>
                <option key={el.id} value={el.id}>{el.name}</option>
              ) : ''
              }
            </select>
            <input type="file" onChange={this.fileChangedHandler} />
            {/* {
          ImagePreviewUrls && 
          ImagePreviewUrls.map(el =>
              <img width={100} src={el}  alt="img"/>
              )
      } */}
            <input type="submit" onClick={this.handleSubmit} value="Редактировать" />
          </form>
        }

      >
      </Modal>
    );
  };
}

const mapDispatchToProps = { updateProduct, getCategories };
const mapStateToProps = (state) => ({ categories: state.categories }); 

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);