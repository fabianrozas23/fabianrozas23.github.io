import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderMenu from "./App";
import Footer from "./Footer";
import styled from "styled-components";
import { Divider, Container } from "semantic-ui-react";
import { Inicio } from './Inicio';
import Validador from './Header';
import Formulario from './Formulario';
import { Rss } from './Rss';
import { Curso } from './Curso';
import './Estilo.css';
import './inicio.css';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const Content = styled(Container)`
  margin-top: 6em
  flex: 1;
`;

ReactDOM.render(
  <Router>
    <Wrapper>
      <HeaderMenu
        onItemClick={item => this.onItemClick(item)}
        items={[
          ["Inicio", "/"],
          ["Validador", "/Validador"],
          ["Formulario", "/Formulario"],
          ["Curso", "/Curso"],
          ["Redes sociales", "/Rss"]
        ]}
        headerIcon={"compass outline"}
      />
      <Divider />
      <Content>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/Validador" component={Validador} />
          <Route path="/Formulario" component={Formulario} />
          <Route path="/Curso" component={Curso} />
          <Route component={Rss} />
        </Switch>
      </Content>
      <Footer />
    </Wrapper>
  </Router>,
  document.getElementById("root")
);