import React from "react";
import PropTypes from "prop-types";
import cs from "./ImageGalleryItem.module.css";
// import Modal from "../Modal/Modal";

class ImageGalleryItem extends React.Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openImage: PropTypes.func.isRequired,
  };

  render() {
    const { webformatURL, id, openImage, largeImageURL } = this.props;
    return (
      <li
        className={cs.ImageGalleryItem}
        key={id}
        onClick={() => {
          openImage(largeImageURL);
        }}
      >
        <img src={webformatURL} alt="" className={cs.ImageGalleryItemImage} />
      </li>
    );
  }
}

export default ImageGalleryItem;
