import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class AppFooter extends Component {
  constructor(props) {
    super(props);
    props.loadFloors({});
  }
  onFloorChanged(floor) {
    this.props.onFloorChanged(floor);
  }
  renderButtons() {
    if (this.props.floors) {
      return this.props.floors.map(floor => (
        <Button vertical onPress={() =>this.onFloorChanged(floor.id)}>
          <Text>{floor.name}</Text>
        </Button>
      ))
    }
    return null;
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            {this.renderButtons()}
          </FooterTab>
        </Footer>
    );
  }
}