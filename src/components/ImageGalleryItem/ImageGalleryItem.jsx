import React from "react";
import PropTypes from "prop-types";
import cs from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";

class ImageGalleryItem extends React.Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    viewModal: false,
  };

  toggleModal = () => {
    this.setState(({ viewModal }) => ({
      viewModal: !viewModal,
    }));
  };
  render() {
    const { webformatURL, id, largeImageURL } = this.props;
    const { viewModal } = this.state;
    return (
      <li className={cs.ImageGalleryItem} key={id} onClick={this.toggleModal}>
        <img src={webformatURL} alt="" className={cs.ImageGalleryItemImage} />
        {viewModal && <Modal onClose={this.toggleModal} src={largeImageURL} />}
      </li>
    );
  }
}

export default ImageGalleryItem;
