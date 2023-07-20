import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  const handleSearchChange = event => {
    onSearchChange(event.target.value);
  };

  const handleResetSearch = () => {
    onSearchChange(''); // Set the search term to an empty string to clear the search input
  };

  return (
    <div className="search-bar">
    {/* Search bar input */}
      <div className="search-input"> 
        <input type="text" placeholder="Search by title, author, country or language" onChange={handleSearchChange} />
        <button onClick={handleResetSearch}>Reset</button>
      </div>

    </div>
  );
};

export default SearchBar;
