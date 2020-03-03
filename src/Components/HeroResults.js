import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import HeroCard from "./HeroCard";

class HeroResults extends Component {

  metaOptions = (props) => {
    let matches = this.props.matches;



    return (
      matches === null ?
        "Search Meta Name" :
        matches.map(match => {
          let { id, name, biography, work, image } = match;
          return (
            <Card
              key={id}
              image={image.url}
              header={name}
              meta={biography["full-name"]}
              description={work.base}
              onClick={this.props.setHero}
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
