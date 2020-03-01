import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class HeroResults extends Component {

  metaOptions = (props) => {
    let matches = this.props.matches;
    return (
      matches === null ?
        "Search Meta Name" :
        matches.map(match => {
          let { id, name, biography, image } = match;
          return (
            <div className="MetaCard" key={id}>
              <h3><u>{name}: {biography["full-name"]}</u></h3>
              <img style={{ height:"20vh", width:"auto" }} src={image.url} alt={name} />
            </div>
          );
        })
    );
  }

  render() {
    return (
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        {this.metaOptions()}
      </Grid>
    );
  }

}

export default HeroResults;
