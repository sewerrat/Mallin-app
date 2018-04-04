import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class AppFooter extends Component {
  onFloorChanged(floor) {
    this.props.onFloorChanged(floor);
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            {
              this.props.floors.map(floor => (
                <Button vertical onPress={() =>this.onFloorChanged(1)}>
                  <Text>1</Text>
                </Button>
              ))
            }
          </FooterTab>
        </Footer>
    );
  }
}