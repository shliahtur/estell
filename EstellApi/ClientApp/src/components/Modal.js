import React from 'react';

import Portal from './portal/Portal';

import '../styles/Modal.css';

const Modal = ({
  title, isOpen, onSubmit, children, onCancel
}) => {

  return (
    <React.Fragment>
      { isOpen &&
        <Portal>
          <div className="modalOverlay" onClick={onCancel}>
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <div className="close-btn" name="times" onClick={onCancel}></div>
              </div>
              <div className="modalBody">
                {children}
              </div>
              <div className="modalFooter">
                <button onClick={onSubmit}>Отправить</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </React.Fragment>
  );
};

export default Modal;