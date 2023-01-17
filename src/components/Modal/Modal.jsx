import React, { Component } from "react";
import { createPortal } from 'react-dom';
import { Overlay,ModalContainer,ModalImage } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <ModalImage src={this.props.src} alt="image" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}








