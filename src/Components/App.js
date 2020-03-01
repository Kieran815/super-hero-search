import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import SearchBar from "./SearchBar";
import HeroCard from "./HeroCard";

class App extends Component {
  state = {
    searchName: "",
    matches: // null
    // start `temp2` json, Batman: Bruce Wayne
    [
      {
        "id": "70",
        "name": "Batman",
        "powerstats": {
          "intelligence": "100",
          "strength": "26",
          "speed": "27",
          "durability": "50",
          "power": "47",
          "combat": "100"
        },
        "biography": {
          "full-name": "Bruce Wayne",
          "alter-egos": "No alter egos found.",
          "aliases": [
            "Insider",
            "Matches Malone"
          ],
          "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
          "first-appearance": "Detective Comics #27",
          "publisher": "DC Comics",
          "alignment": "good"
        },
        "appearance": {
          "gender": "Male",
          "race": "Human",
          "height": [
            "6'2",
            "188 cm"
          ],
          "weight": [
            "210 lb",
            "95 kg"
          ],
          "eye-color": "blue",
          "hair-color": "black"
        },
        "work": {
          "occupation": "Businessman",
          "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
        },
        "connections": {
          "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
          "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
        },
        "image": {
          "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        }
      }
    ]// end `temp2` json, Batman: Bruce Wayne

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
      <div>
        <HeroHeader />
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          matches={this.state.matches}
        />
      <HeroCard
        matches={this.state.matches}
      />
      </div>
    )
  }

}

export default App;
