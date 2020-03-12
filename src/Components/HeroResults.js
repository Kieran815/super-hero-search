import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import "./HeroResults.css";

class HeroResults extends Component {

  metaOptions = (props) => {
    let matches = this.props.matches;
    return (
      matches === null ?
        "Enter Search Params" :
      matches === undefined ?
        "Couldn't Find Hero :/" :
        matches.map((match, index) => {
          console.log(index);
          let { id, name, biography, work, image } = match;
          return (
            <Card
              key={id}
              image={image.url}
              header={name}
              meta={biography["full-name"]}
              description={work.base}
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
