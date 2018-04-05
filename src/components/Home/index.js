import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { common } from 'mallin-app/src/styles';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={common.container}>
					<Text>Home</Text>
			</View>
		);
	}
}

