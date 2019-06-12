import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css';

// I chose to use React Portals for modal, so it is render at the same level as our root div
const modalRoot = document.getElementById('portal');

export default class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="backdrop">
        <div className="info-container">
          <div className="repos-section">
            {this.props.children}
          </div>
          <button onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>,
      modalRoot,
    )
  }
}