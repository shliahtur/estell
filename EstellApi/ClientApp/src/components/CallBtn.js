import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import '../styles/CallBtn.css';
import phoneIcon from '../img/icons/call-btn-icon.svg';


export default class CallBtn extends Component {
    state = {
        isOpen: false,
      }
    
      openModal = () => {
        this.setState({ isOpen: true });
      }
    
      handleSubmit = () => {
        this.setState({ isOpen: false });
      }
    
      handleCancel = (e) => {
          if(e.target.className == 'modalOverlay' || e.target.className == 'close-btn'){
            this.setState({ isOpen: false });
          }
      }

  render() {
    return (
        <Fragment>
        <img className="call-btn" src={phoneIcon} onClick={this.openModal}/>
        <Modal
          title="Test Dialog window"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
            <div className="modal-label">Имя</div>
            <input type='text'/>
            <div className="modal-label">Телефон</div>
            <input type='text'/>
        </Modal>

      </Fragment>
    )
  }
}
