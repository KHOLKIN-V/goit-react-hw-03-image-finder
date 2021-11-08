import React from "react";
import cs from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" className={cs.Button} onClick={onClick}>
        Load more
      </button>
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

export default Button;
