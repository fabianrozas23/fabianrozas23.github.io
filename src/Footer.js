import React from "react";
import { Segment, Container, Icon } from "semantic-ui-react";


const Footer = () => (
  <Segment inverted>
    <Container textAlign="center">
      Página creada por Fabián Rozas
      <Icon name="user" style={{ marginLeft: "5px" }} />
    </Container>
  </Segment>
);

export default Footer;