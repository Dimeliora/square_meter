import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({ children, onClose }) => {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'modal');

  React.useEffect(() => {
    document.body.append(portal);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.body.removeChild(portal);
    };
  });

  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          Закрыть
        </button>
        {children}
      </div>
    </div>,
    portal,
  );
};

export default Modal;
