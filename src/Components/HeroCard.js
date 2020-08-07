import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { id, image, name, biography, appearance, work, connections } = this.props.match;

    return (
      <div>
        <div className="cardOption">
          {this.state.isOpen ?
            <Card
              key={id}
              onClick={()=>{this.setState({ isOpen: !this.state.isOpen })}}
            >
              <Image src={image.url} alt={`${name}`} />
              <Card.Header>Name: {name}</Card.Header>
              <Card.Header>AKA: {biography["full-name"]}</Card.Header>
              <Card.Meta>
                <span className='date'>First Appearance: {biography["first-appearance"]}</span>
              </Card.Meta>
              <Card.Content>
                Home: {biography["place-of-birth"]}
                <Card.Description>Gender: {appearance.gender}</Card.Description>
                <Card.Description>Species: {appearance.race}</Card.Description>
                <Card.Description>Height: {appearance.height[0]}"</Card.Description>
                <Card.Description>Weight: {appearance.weight[0]}</Card.Description>
                <Card.Description>Eyes: {appearance["eye-color"]}</Card.Description>
                <Card.Description>Hair: {appearance["hair-color"]}</Card.Description>
              </Card.Content>
              <Card.Content>Occupation: {work.occupation}</Card.Content>
              <Card.Content>Known Locations: {work.base}</Card.Content>
              <Card.Content>
                Alter Egos: {biography["alter-egos"]}
              </Card.Content>
              <Card.Content>
                <Card.Description>Aliases: {biography.aliases}</Card.Description>
              </Card.Content>
              <Card.Content>Group Affiliations: {connections["group-affiliations"]}</Card.Content>
              <Card.Content>Relatives: {connections.relatives}</Card.Content>
            </Card>
            :
            <Card
              key={id}
              image={image.url}
              header={name}
              description={work.base}
              onClick={()=>{
                this.setState({ isOpen: !this.state.isOpen })
              }}
            />
          }
        </div>
      </div>
    );
  }
}

export default HeroCard;
