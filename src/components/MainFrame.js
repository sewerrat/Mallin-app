import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text, Form } from 'native-base';
import { Field,reduxForm } from 'redux-form';

import { common } from 'mallin-app/src/styles';
import Main from 'mallin-app/src/components/main';
import validate from './validate';

export default class MainFrame extends Component{

    renderContent() {
        return (
            <View>Comming soon</View>
        )
    }
	
	render() {
		return (
			<Main navigation={this.props.navigation}>
				{this.renderContent()}
			</Main>
		)
	}
}