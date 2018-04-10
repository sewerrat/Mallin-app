import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text, Form } from 'native-base';
//import { Field,reduxForm } from 'redux-form';

import { common } from 'mallin-app/src/styles';
import validate from './validate';
import MainFrame from '../MainFrame';

export default class LoginScreen extends MainFrame{
	renderContent(){
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
