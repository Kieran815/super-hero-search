import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import SearchBar from "./SearchBar";
import HeroResults from "./HeroResults";
import HeroFooter from "./HeroFooter";
import "./App.css";

require('dotenv').config()

class App extends Component {
  state = {
    searchName: "Batman",
    matches: []
  };

  // sets `state` using value from `input`
  handleChange = (event) => {
    this.setState({ searchName: event.target.value });
  };

  // `onSubmit`, handles sending state to api request and returns JSON
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchName === "") {
      alert('Please Enter Meta Name');
    } else {
      fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${process.env.REACT_APP_HERO_API}/search/${this.state.searchName}`)
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
        <HeroHeader />
        <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            matches={this.state.matches}
          />
        <HeroResults
          matches={this.state.matches}
        />
        <div className="footer">
          <HeroFooter />
        </div>
    </div>

    )
  }

}

export default App;
