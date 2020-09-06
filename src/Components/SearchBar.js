import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { handleSubmit, handleChange } = props;
  return(
    <div className="search-bar">
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
