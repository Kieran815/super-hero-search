import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import "./HeroResults.css";
import HeroCard from "./HeroCard";

class HeroResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHero: "",
      match: ""
    }
  }

  metaOptions = (props) => {
    let matches = this.props.matches;
    return (
      matches === null ?
        "Enter Search Params" :
      matches === undefined ?
        "Couldn't Find Hero :/" :
        matches.map((match, index) => {
          let { id, name, biography, work, image } = match;
          return (
            <Card
              index={index}
              key={id}
              image={image.url}
              header={name}
              meta={biography["full-name"]}
              description={`Known Locations:\n ${work.base}`}
              onClick={event => {
                this.setState({ match : match });
                console.log({match});
                return (
                  <HeroCard
                    match={this.state.match}
                  />
                );
              }}
            />
          );
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
