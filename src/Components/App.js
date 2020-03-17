// 10215225651027511


import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import SearchBar from "./SearchBar";
import HeroResults from "./HeroResults";
import "./App.css";

class App extends Component {
  state = {
    searchName: "",
    matches: null
  };

  setHero = () => {
    console.log(this.state.matches.index);
  }

  // sets `state` using value from `input`
  handleChange = (event) => {
    this.setState({ searchName:event.target.value });
  };

  // `onSubmit`, handles sending state to api requst and returns JSON
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchName === "") {
      alert('Please Enter Meta Name');
    } else {
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
      <div>
        <div className="headGroup">
          <HeroHeader />
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            matches={this.state.matches}
          />
        </div>
        <HeroResults
          matches={this.state.matches}
        />
    </div>

    )
  }

}

export default App;
