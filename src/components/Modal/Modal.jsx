import React from "react";
import cs from "./Modal.module.css";

const rootModal = document.querySelector("#rootModal");

const Modal = () => {
  return (
    <>
      <div className={cs.Overlay}>
        <div className={cs.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

//   Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number.isRequired),
//   };

export default Modal;
