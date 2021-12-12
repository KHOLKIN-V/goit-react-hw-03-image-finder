import React, { Component } from 'react';
import Loader from "react-loader-spinner";

import cs from './App.module.css';
import { mapper } from "./service/mapper";
import fetchApi from "./service/fetchApi";
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    error: "",
    status: "idle",
    viewModal: false,
    modalImage: "",
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery; 
    const query = this.state.searchQuery;
    const page = this.state.page;
    const prevPage = prevState.page;

    if (prevQuery !== query) {
      
      this.setState({ images: [] });
      this.getImages(query, page);
    }

    if (prevPage !== page && prevPage < page) {
      this.getImages(query, page);
    }
  }

  getImages = (query, page) => {
    this.setState({status: 'pending'});
    fetchApi(query, page)
    .then((hits) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...mapper(hits)],
        // page: prevState.page + 1,
        status: 'resolved',
      }));
    console.log(this.state.images);
    })
    .catch(({message}) => this.setState({ error: message, status: 'rejected' }))
    .finally(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  loadMore = e => {
    e.preventDefault();
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  }

  formSubmit = query => {
    this.setState({searchQuery: query, page: 1});
  }

  toggleModal = () => {
    this.setState(({ viewModal }) => ({
      viewModal: !viewModal,
    }));
  };

  openImage = (modalImage) => {
    this.setState({modalImage});
    this.toggleModal();
  }
  
  render() {
    const {status, images, error, page, modalImage, viewModal} = this.state;

    return (
      <>
      <div className={cs.App}>
        <Searchbar onSubmit={this.formSubmit}/>
        {(status === 'idle') &&
          <div style={{fontWeight: '500', fontSize: '30px', textAlign: 'center'}}>Введите название</div>
        }
        {(status === 'rejected') &&
          <div style={{fontWeight: '700', fontSize: '50px', textAlign: 'center'}}>{error}</div>
        }
        {(images.length > 0) && 
          <>
            <ImageGallery onSearch={images} openImage={this.openImage} />
            <Button onClick={this.loadMore} page={page} />
          </>
        }
        {(status === "pending") && 
          <Loader
            type="Puff"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={3000} //3 secs
          />
        }
        {viewModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt='' />
          </Modal>
        )}
      </div>
      </>
    )
  }
}


export default App;
