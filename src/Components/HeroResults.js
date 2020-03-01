import React, { Component } from "react";
import HeroCard from "./HeroCard";


// add `Card` from Semantic-ui

// <Card>
//     <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Daniel</Card.Header>
//       <Card.Meta>Joined in 2016</Card.Meta>
//       <Card.Description>
//         Daniel is a comedian living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         10 Friends
//       </a>
//     </Card.Content>
//   </Card>

class HeroResults extends Component {

  metaOptions = (props) => {
    let matches = this.props.matches;
    return (
      matches === null ?
        "Search Meta Name" :
        matches.map(match => {
          let { id, name, biography, image } = match;
          return (
            <div
              className="MetaCard"
              key={id}
            >
              // <h3><u>{name}: {biography["full-name"]}</u></h3>
              // <img style={{ height:"20vh", width:"auto" }} src={image.url} alt={name} />
            </div>
          );
        })
    );
  }

  render() {
    return (
      <div
        container
        justify="space-between"
        alignItems="center"
      >
        {this.metaOptions()}
      </div>
    );
  }

}

export default HeroResults;
