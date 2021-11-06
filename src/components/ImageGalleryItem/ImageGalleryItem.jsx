import React from "react";
import cs from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <img src={webformatURL} alt="" className={cs.ImageGalleryItemImage} />
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

export default ImageGalleryItem;
