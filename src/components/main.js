import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text } from 'native-base';

import AppHeader from './header';
import AppFooter from './footer';
import Home from './home';
import Street from './street';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content padder>
          <Home />
        </Content>
        <AppFooter />
      </Container>
    );
  }
}