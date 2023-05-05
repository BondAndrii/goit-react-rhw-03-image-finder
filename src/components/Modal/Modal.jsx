import React, { Component } from "react";

import { createPortal } from 'react-dom';

import styles from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component{
  state = {
    bigPic:{},
  }

  componentDidMount() {

    const { bigPic } = this.props;
    this.setState({ bigPic })
    window.addEventListener('keydown', this.handleKeyDown )
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  }
  handleBackdropClick = (event) => {
    console.log("event.target", event.target)
    console.log("event.currentTarget", event.currentTarget)
    if (event.target === event.currentTarget) {
      this.props.onClose()
    }
  }
  render() {
    const { bigPic } = this.state;
    const { largeImageURL, tags } = bigPic;
    return createPortal(
    <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>          
          <img src={largeImageURL} alt={tags}  />
      </div>
    </div>, modalRoot);
  }
  
}
