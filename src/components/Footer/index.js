import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class AppFooter extends Component {
  constructor(props) {
    super(props);
  }
 
  renderButtons() {
    if (this.props.floors) {
      /*return this.props.floors.map(floor => (
        <Button vertical onPress={() =>this.onFloorChanged(floor.id)}>
          <Text>{floor.name}</Text>
        </Button>
      ))*/
      return null;  
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