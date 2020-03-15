import React, { Component } from 'react';
import {
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react';

class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }



  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  render() {
    const match = this.props.match;
    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
      >
        <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
          <Header>{match.biography}</Header>
          <p>Portals have tons of great callback functions to hook into.</p>
          <p>To close, simply click the close button or click away</p>
        </Segment>
      </TransitionablePortal>
    )
  }
}

export default HeroCard;
