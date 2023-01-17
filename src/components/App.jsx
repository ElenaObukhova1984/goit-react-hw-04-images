import React, { Component } from "react";
import * as ImageService from 'service/api';
import toast, { Toaster }  from 'react-hot-toast';
import { GlobalStyle } from "./GlobalStyle";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";


export class App extends Component {
  state = {
    query: '',
    page: 1,
    error: null,
    images: [],
    isLoading:false,
    per_page: 12,
    total_results: null,
      }
  
  

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {this.setState({
     isLoading: true,
      });
      this.getImages();
    };

  }

  getImages = async () => {
    const { query, page, images } = this.state;
    try {
      const fetchImg = await ImageService.fetchImages(query, page);

      
      this.setState({
        images: [...images, ...fetchImg.hits],
        total_results: fetchImg.totalHits,
        isLoading: false,
        
      });

      if (fetchImg.totalHits === 0) {
        toast.error(`Nothing found! Please enter a search query again!!!`, {
            theme: "colored"
          })
      }
   
    } catch (error) {
      this.setState({
        error: error.message,
      })
    
    }
  }
  
  handleFormSubmit = (query) => {
    this.setState({
      query,
      images: [],
      page: 1 
    })
  }
  
  onLoadMore = () => {

    this.setState(prevState => ({
      page:prevState.page+1
    }))
  }

  render() {
    const { page, images, per_page, total_results,isLoading } = this.state;
    const totalPage = Math.ceil(total_results /per_page);
    return (
      <>
      <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={images}>
        </ImageGallery>
      {images.length>0 && page<totalPage&&(<Button onClick={this.onLoadMore}/> )}
      {(isLoading===true) && <Loader />}
      
      <Toaster />
      <GlobalStyle />
      </>
    )
  }
}
