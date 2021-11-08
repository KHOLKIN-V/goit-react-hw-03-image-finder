import React from "react";

import cs from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ onSearch }) => {
  return (
    <>
      <ul className={cs.ImageGallery}>
        {/* {!onSearch && <h3 style={{ textAlign: "center" }}>Введите название</h3>} */}
        {onSearch.map(({ webformatURL, id, largeImageURL }) => (
          <>
            <ImageGalleryItem
              webformatURL={webformatURL}
              id={id}
              largeImageURL={largeImageURL}
            />
          </>
        ))}
      </ul>
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

export default ImageGallery;
