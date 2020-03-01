import React, { Component } from "react";
import { Container } from '@material-ui/core';
import HeroResults from "./HeroResults";

class SearchBar extends Component {
    matches = this.props.matches;
    render() {
      return(
        <Container>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              id="MetaSearchBar"
              placeholder="Enter Meta Name"
              onChange={this.props.handleChange}
            />
            <button type="submit">Locate Meta</button>
          </form>
          <HeroResults
            matches={this.props.matches}
          />
        </Container>
      );
    }
  }

export default SearchBar;
