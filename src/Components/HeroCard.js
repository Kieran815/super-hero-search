import React from 'react';

const HeroCard = (props) => {
  let matches = this.props.matches;
  return (
    matches === null ?
      "" :
      matches.map(match => {
        let { id, name, powerstats, biography, appearance, work, connections, image } = match;
        return (
          <div className="MetaCard" key={id} onClick={this.selectHero()}>
            <h3><u>{name}: {biography["full-name"]}</u></h3>
            <img style={{ height:"20vh", width:"auto" }} src={image.url} alt={name} />
          </div>
        )
      })
  )
}

export default HeroCard;
