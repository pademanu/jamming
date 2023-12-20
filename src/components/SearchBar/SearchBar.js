import React from "react";

const SearchBar = ({ searchText, handleSearchChange, handleSearchClick }) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;