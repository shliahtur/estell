import React from 'react';
import Portal from './Helpers/Portal';

import '../styles/Modal.css';

const Modal = ({ isOpen, children, onCancel}) => {
  return (
    <React.Fragment>
      { isOpen &&
        <Portal>
          <div className="modalOverlay" onClick={onCancel}>
            <div className="modalWindow">
                <div className="close-btn" onClick={onCancel}></div>
               <div className="modalBody">
                {children}
              </div>
            </div>
          </div>
        </Portal>
      }
    </React.Fragment>
  );
};

export default Modal;