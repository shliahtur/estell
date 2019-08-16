import React from 'react';
import Modal from '../Modal';

import '../../styles/Modal.css';

const DeleteProduct = ({ isOpen, onCancel, onDelete }) => {

  return (
     <Modal
     isOpen={isOpen}
     onCancel={onCancel}
     children={
        <button onClick={onDelete}>Удалить</button>
     }
     >       
     </Modal>
  );
};

export default DeleteProduct;