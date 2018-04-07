import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
export default class AppHeader extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.screenName}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}