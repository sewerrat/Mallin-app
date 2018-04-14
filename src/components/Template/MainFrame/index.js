import React, { Component } from 'react';
import { View } from 'react-native';

import Main from 'mallin-app/src/components/Template/main';
import Header from 'mallin-app/src/components/Template/Header';
import Footer from 'mallin-app/src/components/Template/Footer';


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
				header={this.renderHeader}
				footer={this.renderFooter}
				>
        		{this.renderContent()}
			</Main>
		)
	}
}