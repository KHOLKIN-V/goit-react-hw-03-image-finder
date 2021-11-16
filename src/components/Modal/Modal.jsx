import React from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";
import cs from "./Modal.module.css";
import PropTypes from 'prop-types'

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
      <>
        <div className={cs.Overlay} onClick={this.handleBackdropClick}>
          <div className={cs.Modal}>
            <img src={this.props.src} alt="" />
          </div>
        </div>
      </>,
      rootModal,
    );
  }
}

//   Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number.isRequired),
//   };

export default Modal;
