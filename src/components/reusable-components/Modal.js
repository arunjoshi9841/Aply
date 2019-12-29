import React from "react";
import propTypes from "prop-types";

const Dialog = isOpen => {
  return {
    display: isOpen ? "flex" : "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "transparent"
  };
};

const DialogContent = (height, width) => {
  return {
    backgroundCcolor: "#fefefe",
    margin: "auto",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    minWidth: "400px",
    maxWidth: "600px",
    height: height ? `${height}%` : "auto",
    width: width ? `${width}%` : "auto",
  };
};
const Modal = ({ isOpen, onClose, children, height, width }) => {
  return (
    <div style={Dialog(isOpen)} onClick={onClose}>
      <div
        onClick={event => event.stopPropagation()}
        style={DialogContent(height, width)}
      >
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  height: propTypes.number,
  width: propTypes.number
};
export default Modal;
