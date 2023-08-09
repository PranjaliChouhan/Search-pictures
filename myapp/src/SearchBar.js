import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Search pictures..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='btn' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
