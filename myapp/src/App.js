
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import PictureList from './PictureList';
import axios from 'axios';


export const ACCESS_KEY = process.env.REACT_APP_ACCESS_URL;

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1); // Track the current page number
  const [searchTerm, setSearchTerm] = useState(''); // Track the search term
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchPhotos();
  }, [page, searchTerm]);

  const fetchPhotos = () => {
    setIsLoading(true);
    const apiUrl = searchTerm
      ? `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${searchTerm}&page=${page}`
      : `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${page}`;

    axios.get(apiUrl)
      .then(response => {
        const fetchedPhotos = searchTerm ? response.data.results : response.data;
        setPhotos(prevPhotos => [...prevPhotos, ...fetchedPhotos]);
        
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setIsLoading(false);
      });
  };

  const handleSearch = newSearchTerm => {
    setSearchTerm(newSearchTerm);
    setPage(1); // Reset page number when a new search is initiated
    setPhotos([]); // Clear existing photos when a new search is initiated
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1); // Increment the page number to load more results
  };

  return (
    <div className="set-container">
      <h1>Picture Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <PictureList pictures={photos} isLoading={isLoading} />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;
