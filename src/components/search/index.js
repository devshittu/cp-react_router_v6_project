import React, { useRef } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
// import createSearchParams from 'react-router-dom'
// Import createSearchParams
// Import useNavigate

const Search = () => {

  // get navigate function
  const navigate = useNavigate();

  const searchInputRef = useRef();
  const [searchParams] = useSearchParams();


  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }

    // use createSearchParams 
const query = createSearchParams({ name: searchQuery });

    // imperatively redirect with useNavigate() returned function
    navigate(`/search?${query}`);

  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
