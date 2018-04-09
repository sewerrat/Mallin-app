import React, { Component } from 'react';
import { View } from 'react-native';

import Main from 'mallin-app/src/components/main';

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