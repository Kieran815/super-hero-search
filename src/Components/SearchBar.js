import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { handleSubmit, handleChange } = props;
  return(
    <div className="search-bar">
      <p className="directions">Search for your Favorite Marvel and DC Characters.<br/> Select a Card for More Details.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="MetaSearchBar"
          placeholder="Enter Meta Name"
          onChange={handleChange}
        /><br/>
        <button type="submit" className="subBtn">Locate Meta</button>
      </form>
    </div>
  );
}

export default SearchBar;
