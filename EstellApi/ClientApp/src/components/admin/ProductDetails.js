import React from 'react';
import Modal from '../Modal';
import Input from '../Helpers/Input';
import '../../styles/Modal.css';

const ProductDetails = ({ product, isOpen, onCancel, categories }) => {

  return (
     <Modal
     isOpen={isOpen}
     onCancel={onCancel}
     children={
      <form onSubmit={this.handleSubmit}>
      <Input width={250} id="Name" label="Название"  name="Name" value={product.name} onChange={this.handleChange} />
      <Input width={250} id="Price" label="Цена" name="Price" value={product.price} onChange={this.handleChange} />
      <Input width={250} id="Description" label="Описание" name="Description" value={product.description} onChange={this.handleChange} />
      <Input width={250} id="Age" label="Возраст"  name="Age" value={product.age} onChange={this.handleChange} />
      <Input width={250} id="VendorCode" label="Артикул" name="VendorCode" value={product.vendorCode} onChange={this.handleChange} />
      <Input width={250} id="Vendor" label="Бренд" name="Vendor" value={product.vendor} onChange={this.handleChange} />
    
      <select name="CategoryId" value={product.categoryId} onChange={this.handleChange}>
        { categories[0] ? categories.map(el =>
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
      <input type="submit" value="Добавить"/>
      </form>
     }
  
     >       
     </Modal>
  );
};

export default ProductDetails;