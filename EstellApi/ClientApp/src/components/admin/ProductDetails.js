import React from 'react';
import Modal from '../Modal';

import '../../styles/Modal.css';

const ProductDetails = ({ product, isOpen, onCancel }) => {

  return (
     <Modal
     isOpen={isOpen}
     onCancel={onCancel}
     children={
      <div className="product-item">   
      {
        product.images ?
        product.images.map(el =>     
          <img key={el.name} className="product-item_img" src={process.env.PUBLIC_URL + `/Products/${el.name}`} height={"200px"} alt={product.name} />      
          ) : ''
      }
      <h4 className="product-item_name">{product.name}</h4>
      <p className="product-item_description">{product.description}</p>
      <div className="product-item_price-line">
        <p className="product-item_price">{product.price} грн</p>
        <button className="product-item_cart"></button>
      </div>
      <p className="product-item_article">{product.vendorCode}</p>
      <span className="product-item_age product-item_age__yellow">{product.age}+</span>
    </div>
     }
     >       
     </Modal>
  );
};

export default ProductDetails;