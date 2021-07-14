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
          ["MagnaWerwt", "/Magnawerwt"],
          ["MineroWarrior", "/Minerowarrior"],
          ["ElasticPerson", "/Elasticperson"],
          ["CovidPest", "/Covidpest"]
        ]}
        headerIcon={"compass outline"}
      />
      <Divider />
      <Content>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/MagnaWerwt" component={Validador} />
          <Route path="/MineroWarrior" component={Formulario} />
          <Route path="/ElasticPerson" component={Curso} />
          <Route path="/CovidPest" component={Rss} />
        </Switch>
      </Content>
      <Footer />
    </Wrapper>
  </Router>,
  document.getElementById("root")
);