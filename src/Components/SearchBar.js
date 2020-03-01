import React, { Component } from "react";
// import HeroResults from "./HeroResults";

class SearchBar extends Component {
    matches = this.props.matches;
    render() {
      return(
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              id="MetaSearchBar"
              placeholder="Enter Meta Name"
              onChange={this.props.handleChange}
            />
            <button type="submit">Locate Meta</button>
          </form>
          {/* <HeroResults
            matches={this.props.matches}
          /> */}
        </div>
      );
    }
  }

export default SearchBar;
