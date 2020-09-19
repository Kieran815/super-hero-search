import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';

class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    }
  }

  cardFlip = (e) => {
    e.preventDefault()
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  render() {
    const { id, image, name, biography, appearance, work, connections } = this.props.match;

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Card
          key={id}
          onClick={this.cardFlip}
        >
          <Image className="" src={image.url} alt={`${name}`} />
          <Card.Header>Name: {name}</Card.Header>
          <Card.Header>AKA: {biography["full-name"]}</Card.Header>
          <Card.Content>
            Known Locations: {work.base}
          </Card.Content>
          <Card.Content>
            Alter Egos: {biography["alter-egos"]}
          </Card.Content>
          <Card.Content>
            <Card.Description>Aliases: {biography.aliases}</Card.Description>
          </Card.Content>
        </Card>
        
        <Card
          key={id}
          onClick={this.cardFlip}
        >
          <Card.Meta>
            <span className='date'>First Appearance: {biography["first-appearance"]}</span>
          </Card.Meta>
          <Card.Content>
            Home: {biography["place-of-birth"]}
            <Card.Description>Gender: {appearance.gender}</Card.Description>
            <Card.Description>Species: {appearance.race}</Card.Description>
            <Card.Description>Species: {appearance.race}</Card.Description>
            <Card.Description>Height: {appearance.height[0]}"</Card.Description>
            <Card.Description>Weight: {appearance.weight[0]}</Card.Description>
            <Card.Description>Eyes: {appearance["eye-color"]}</Card.Description>
            <Card.Description>Hair: {appearance["hair-color"]}</Card.Description>
          </Card.Content>
          <Card.Content>Occupation: {work.occupation}</Card.Content>
          
          <Card.Content>Group Affiliations: {connections["group-affiliations"]}</Card.Content>
          <Card.Content>Relatives: {connections.relatives}</Card.Content>
        </Card>
      </ReactCardFlip>
    );
  }
}

export default HeroCard;
