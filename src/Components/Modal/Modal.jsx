import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import closeImage from "./assets/multiply-black.png";

import "./Modal.scss";

const Modal = ({ children, onClose }) => {
  const portal = document.createElement("div");
  portal.setAttribute("id", "modal");

  useEffect(() => {
    document.body.append(portal);
    document.body.setAttribute("style", "overflow: hidden;");

    return () => {
      document.body.removeAttribute("style");
      document.body.removeChild(portal);
    };
  });

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={closeImage} alt="Close button" />
        </button>
        {children}
      </div>
    </div>,
    portal
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  onClose: () => {},
};

export default Modal;
