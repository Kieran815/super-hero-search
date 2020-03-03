import React from "react";
import { Container, Header } from "semantic-ui-react";

const HeroHeader = () => {
  return (
    <Container>
      <Header as="h1" className="header">
        S.M.A.S.H.
      </Header>
      <h2>Super/Meta Analysis, Study, and Highlights</h2>
    </Container>
  );
}

export default HeroHeader;
