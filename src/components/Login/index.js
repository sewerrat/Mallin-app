import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text, Form } from 'native-base';
import { Field,reduxForm } from 'redux-form';

import { common } from 'mallin-app/src/styles';
import Main from 'mallin-app/src/components/main';
import validate from './validate';

class Login extends Component {
	constructor(props){
    super(props);
  }
  render(){
    return (
      <View>
				<Form>
					<Item>
						<Input placeholder="Username" />
					</Item>
					<Item last>
						<Input type="password" placeholder="Password" />
					</Item>
				</Form>
			</View>
    )
  }
}

const abc = reduxForm({
	form: 'test',
	validate
})(Login);

export default class LoginScreen extends Component{
	render() {
	return <Main navigation={this.props.navigation} content={<Login />} />
	}
}
