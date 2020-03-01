import React, { Component } from "react";
import { Container } from "@material-ui/core";
import HeroHeader from "./HeroHeader";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    searchName: "Batman", // "",
    matches: null
  };

  // sets `state` using value from `input`
  handleChange = (event) => {
    this.setState({ searchName:event.target.value })
  };

  // `onSubmit`, handles sending state to api requst and returns JSON
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching For ${this.state.searchName}`);
    fetch(`https://superheroapi.com/api/10215225651027511/search/${this.state.searchName}`)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        this.setState({ matches: data.results });
        console.log(this.state.matches);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  render() {
    return (
      <Container>
        <HeroHeader />
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          matches={this.state.matches}
        />

      </Container>
    )
  }

}

export default App;
