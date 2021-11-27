import React from "react";
import PropTypes from "prop-types";
import cs from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ onSearch }) => {
  return (
    <>
      <ul className={cs.ImageGallery}>
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
  onSearch: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ImageGallery;
