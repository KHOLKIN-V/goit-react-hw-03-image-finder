import React from "react";
import PropTypes from "prop-types";
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

ImageGallery.propTypes = {
    onSearch: PropTypes.arrayOf(PropTypes.any.isRequired),
  };

export default ImageGallery;
