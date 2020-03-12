import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import SearchBar from "./SearchBar";
import HeroResults from "./HeroResults";

import { Container } from "semantic-ui-react";

class App extends Component {
  state = {
    searchName: "",
    matches: null,
    selectedHero: ""
  };

  setHero = () => {
    console.log(this.state.matches.index);
  }

  // sets `state` using value from `input`
  handleChange = (event) => {
    this.setState({ searchName:event.target.value })
  };

  // `onSubmit`, handles sending state to api requst and returns JSON
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchName === "") {
      alert('Please Enter Meta Name');
    } else {
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
        <HeroResults
          matches={this.state.matches}
        />
    </Container>

    )
  }

}

export default App;
