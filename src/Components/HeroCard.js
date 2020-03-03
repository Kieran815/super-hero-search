import React, { Component, Link } from 'react';
import { Card, Icon } from 'semantic-ui-react'



class HeroCard extends Component {
  matches = this.props.matches;

  // nameTag = () => {
  //   return (`${this.props.matches.name}: ${this.props.matches.biography['full-name']}`)
  // }

  extra = () =>{
    return (
      <Link>
        <Icon name='user' />
        16 Friends
      </Link>
    );
  }



  render() {

    return(
        (this.props.matches === null) ?
          "" :
          this.props.matches.map(match => {
            let { id, name, powerstats, biography, appearance, work, connections, image } = match;
            return (
              <Card
                key={id}
                image={image.url}
                header={this.nameTag}
                meta={biography["full-name"]}
                description={work.base}
                extra={this.extra}
              />
            )
          })
    );
  }
}

export default HeroCard;
