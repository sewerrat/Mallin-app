import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text } from 'native-base';

import AppHeader from 'mallin-app/src/containers/Template/Header';
import AppFooter from 'mallin-app/src/containers/Template/Footer';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <AppHeader navigation={this.props.navigation}/>
        <Content padder>
          {this.props.children}
        </Content>
        <AppFooter />
      </Container>
    );
  }
}
