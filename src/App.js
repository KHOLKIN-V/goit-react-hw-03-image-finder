import React, { Component } from 'react';
import Loader from "react-loader-spinner";

import cs from './App.module.css';
import fetchApi from "./service/fetchApi";
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    error: "",
    status: "idle",
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    // const prevPage = prevState.page;
    const query = this.state.searchQuery;
    const page = this.state.page;

    if (prevQuery !== query) {
      
      this.setState({ images: [] });
      this.getImages(query, page);
    }

    // if (prevPage !== page && prevPage < page) {
    //   this.getImages(query, page);
    // }
  }

  getImages = (query, page) => {
    this.setState({status: 'pending'});
    fetchApi(query, page)
    .then((hits) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
        status: 'resolved',
      }));
    console.log(hits);
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
    const {searchQuery, page} = this.state;
    this.getImages(searchQuery, page);
  }

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
    const {status, images, error, page} = this.state;

    return (
      <>
      <div className={cs.App}>
        <Searchbar onSubmit={this.formSubmit}/>
        {(status === 'idle') &&
          <div style={{fontWeight: '500', fontSize: '30px', textAlign: 'center'}}>Введите название</div>
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
          <div style={{fontWeight: '700', fontSize: '50px', textAlign: 'center'}}>{error}</div>
        }
        {(status === 'resolved') && 
          <ImageGallery onSearch={images} />        
        }
        {(status === "resolved") && (images.length > 0) && 
            <Button onClick={this.loadMore} page={page} />
        }
      </div>
      </>
    )
  }
}


export default App;
