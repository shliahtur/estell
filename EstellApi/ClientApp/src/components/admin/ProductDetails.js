import React, {Fragment} from 'react';

import Portal from '../portal/Portal';

import '../../styles/Modal.css';

const ProductDetails = ({
  product, isOpen, onSubmit, onCancel
}) => {

  return (
    <Fragment>
      { isOpen &&
        <Portal>
          <div className="modalOverlay" onClick={onCancel}>
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="close-btn" name="times" onClick={onCancel}></div>
              </div>
              <div className="modalBody">
              <div className="product-item" key={ product.id }>   
                <img className="product-item_img" src={product.imgPath} height={"200px"} alt={product.name} />        
                <h4>{product.name}</h4>
                <p className="product-item_description">{product.description}</p>
                <div className="product-item_price-line">
                  <p className="product-item_price">{product.price} грн</p>
                  <button className="product-item_cart"></button>
                </div>
                <p className="product-item_article">{product.vendorCode}</p>
                <span className="product-item_age product-item_age__yellow">{product.age}</span>
              </div>
              </div>
              <div className="modalFooter">
                <button onClick={onSubmit}>Отправить</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </Fragment>
  );
};

export default ProductDetails;