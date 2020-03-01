import React, { Component } from 'react';

class HeroCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        (this.props.matches === null) ?
          "" :
          this.props.matches.map(match => {
            let { id, name, powerstats, biography, appearance, work, connections, image } = match;
            return (
              <div className="MetaCard" key={70}>
                <h3><u>{name}: {biography["full-name"]}</u></h3>
                <img style={{ height:"20vh", width:"auto" }} src={image.url} alt={name} />
              </div>
            )
          })
    );
  }
}

export default HeroCard;
