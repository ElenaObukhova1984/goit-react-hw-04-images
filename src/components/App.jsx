import { useState, useEffect } from "react";
import * as ImageService from 'service/api';
import toast, { Toaster }  from 'react-hot-toast';
import { GlobalStyle } from "./GlobalStyle";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";


export function App () {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total_results, setTotal_results] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    async function getImages (query, page) {
      try {
        const { hits, totalHits } = await ImageService.fetchImages(query, page);
        setImages(prevState => [...prevState, ...hits]);
        setTotal_results(totalHits);
        setIsLoading(false);
        if (totalHits === 0) {
        toast.error(`Nothing found! Please enter a search query again!!!`, {
            theme: "colored"
          })
      }
        
      } catch (error) {
        setError(error.message);
        
      }
    }
    getImages(query, page);
  }
    , [query, page])
  

  
  
  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  }
  
  const onLoadMore = () => {
    setPage(prevState=>prevState+1)
      }

  
    
  const totalPage = Math.ceil(total_results/12);
    return (
      <>
      <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery
          images={images}>
        </ImageGallery>
      {images.length>0 && page<totalPage&&(<Button onClick={onLoadMore}/> )}
      {(isLoading===true) && <Loader />}
      
      <Toaster />
      <GlobalStyle />
      </>
    )
  }


