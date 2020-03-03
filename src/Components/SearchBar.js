import React, { Component } from "react";

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
        </div>
      );
    }
  }

export default SearchBar;
