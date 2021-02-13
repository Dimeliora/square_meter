import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./Modal.css";

const Modal = ({ children, onClose }) => {
	const portal = document.createElement("div");
	portal.setAttribute("id", "modal");

	React.useEffect(() => {
		document.body.append(portal);
		document.body.setAttribute("style", "overflow: hidden;");

		return () => {
			document.body.removeAttribute("style");
			document.body.removeChild(portal);
		};
	});

	return ReactDOM.createPortal(
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-window" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					&#128939;
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
