import React, { Component } from 'react';
import { View } from 'react-native';

import Main from 'mallin-app/src/components/Template/main';
import AppHeader from 'mallin-app/src/containers/Template/Header';
import AppFooter from 'mallin-app/src/containers/Template/Footer';


export default class MainFrame extends Component{

	renderContent() {
		return (
			<View>Comming soon</View>
		)
	}

	renderHeader() {
		return (
			<AppHeader navigation={this.props.navigation}/>
		);
	}

	renderFooter() {
		return (
			<AppFooter />
		);
	}
	
	render() {
		return (
			<Main
				header={this.renderHeader()}
				footer={this.renderFooter()}
				>
        		{this.renderContent()}
			</Main>
		)
	}
}