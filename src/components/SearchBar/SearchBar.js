import React from "react";

const SearchBar = ({ searchText, handleSearchChange, handleSearchClick }) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={({target}) => handleSearchChange(target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;