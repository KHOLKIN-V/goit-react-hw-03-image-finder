import React from "react";
import cs from "./Modal.module.css";

const rootModal = document.querySelector("#rootModal");

class Modal extends React.PureComponent {
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
    return (
      <>
        <div className={cs.Overlay}>
          <div className={cs.Modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
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
