import { Component } from 'react';

import css from './Modal.module.css'

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.onKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onKeyDown);
  };

  onKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img
              src={this.props.src}
              alt="Here should be the bigger size of selected pic."
              width='1000px'
            />
        </div>
      </div>
    );
  }
}

