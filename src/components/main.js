import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text } from 'native-base';

import AppHeader from 'mallin-app/src/containers/Header';
import AppFooter from 'mallin-app/src/containers/Footer';
import Home from 'mallin-app/src/containers/Home';
import Floors from 'mallin-app/src/containers/Floors';

export default class Main extends Component {
  constructor(props) {
		super(props);
		this.props.loadFloors({
			floor: 1,
			styleURL: mapConst.defaultStyle
		});
	}
  render() {
    return (
      <Container>
        <AppHeader />
        <Content padder>
          <Floors />
        </Content>
        <AppFooter />
      </Container>
    );
  }
}