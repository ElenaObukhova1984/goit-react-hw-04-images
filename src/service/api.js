import axios from "axios";

const API_KEY = '30614835-175317e9c07c2c96a1d90d41b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

// axios.defaults.params = {
//   orientation: 'horizontal',
//   per_page: 12,
// };

export const fetchImages = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(response.data);
    return response.data;
   
}