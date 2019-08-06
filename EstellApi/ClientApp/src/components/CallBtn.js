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
          if(e.target.className === 'modalOverlay' || e.target.className === 'close-btn'){
            this.setState({ isOpen: false });
          }
      }

  render() {
    return (
        <Fragment>
          {
            phoneIcon &&
            <img className="call-btn" src={phoneIcon} onClick={this.openModal} alt="call"/>
          }
        <Modal className="modal-form"
          title="Заполните форму и мы Вам перезвоним"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
            <div className="modal-label modal-label_name">Имя</div>
            <input className="modal-input modal-input_name" type='text'/>
            <div className="modal-label modal-label_phone">Телефон</div>
            <input className=" modal-input modal-input_phone" type='text'/>
        </Modal>

      </Fragment>
    )
  }
}
