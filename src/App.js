import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Loader from "react-loader-spinner";
// import { nanoid } from 'nanoid';

import cs from './App.module.css';
import fetchApi from "./service/fetchApi";
import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
// import Modal from './components/Modal/Modal';



class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    overview: '',
    page: 1,
    // error: "",

    // loading: false,
    // modal: false,
  
    // modalImage: {},
    // viewModal: false,
    status: "idle",
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    // const prevPage = prevState.page;
    const query = this.state.searchQuery;
    const page = this.state.page;

    this.setState({status: 'pending'});

    if (prevQuery !== query) {
      this.setState({ images: [] });
      this.getImages(query, page);
    }
  }

  getImages = (query, page) => {
    fetchApi(query, page)
    .then((hits) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        status: 'resolved',
      }));
    console.log(hits);
    })
  //   .catch(({message}) => this.setState({ error: message, status: 'rejected' }))
  //   .finally(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //     this.setState(prevState => ({ page: prevState.page + 1 }));
  //   });
    };


  formSubmit = query => {
    this.setState({searchQuery: query, page: 1});
  }

  modal = () => {
    this.setState(prevState => ({
      viewModal: !prevState.viewModal,
    }));
  };

  openImage = (modalImage) => {
    this.setState({modalImage});
    this.modal();
  }
  
  render() {
    // const {status, error, searchQuery} = this.state;

    return (
      <>
      <div className={cs.App}>
        <Searchbar onSubmit={this.formSubmit}/>
        {/* {(status === 'idle') &&
          <div>Введите название</div>
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
        {(status === 'rejected') &&
          <div>{error}</div>
        } */}
        {/* {(status === 'resolved') && 
          <ImageGallery onSearch={searchQuery} onOpenImage={this.openImage}/>
        } */}

        {/* {this.state.searchText && <div>{this.state.searchText}</div>} */}
        {/* <ImageGallery onSearch={this.state.searchQuery} onOpenImage={this.openImage}/> */}

        <Button />
        {/* <Modal style={{display: "none"}}/> */}
      </div>
      </>
    )
  }
}


export default App;
