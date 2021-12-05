import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cs from "./Modal.module.css";

const rootModal = document.querySelector("#rootModal");

class Modal extends React.PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
  };

  componentDidMount() {
    console.log("component did mount");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("component will unmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={cs.Overlay} onClick={this.handleBackdropClick}>
        <div className={cs.Modal}>{this.props.children}</div>
      </div>,
      rootModal
    );
  }
}

export default Modal;
