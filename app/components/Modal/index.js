/**
 *
 * Modal
 *
 */

import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

function Modal({ isVisible, onRequestClose, children }) {
  return (
    <ReactModal
      closeTimeoutMS={200}
      onRequestClose={onRequestClose}
      isOpen={isVisible}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.object,
};

export default Modal;
