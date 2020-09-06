import React, { Component } from "react";
import "./HeroResults.css";
import HeroCard from "./HeroCard";

class HeroResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHero: null
    }
  }

  selectHero = () => {
    this.setState({ selectedHero: null })
  }

  metaOptions = (props) => {
    let matches = this.props.matches;
    return (
      matches === null ?
        "Enter Search Params" :
      matches === undefined ?
        "Couldn't Find Hero :/" :
        matches.map((match, index) => {
          return (
            <HeroCard
              key={index}
              match={match}
            />
          )
        })
    );
  }

  render() {
    return (
      <div className="Container">
        {this.metaOptions()}
      </div>
    );
  }
}

export default HeroResults;
