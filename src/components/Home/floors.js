import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
export default class Floors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  renderListFloors() {
    return this.props.floors.map( floor => (
      <Item label={floor.name} value={floor.floorID} />
    ));
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Placeholder Picker</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >

              {this.renderListFloors()}
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}