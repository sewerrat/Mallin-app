import React from "react";
//import Interactable from 'react-native-interactable';

import MainFrame from "mallin-app/src/components/Template/MainFrame";
import ShowMap from 'mallin-app/src/containers/Common/ShowMap';
import InteractableView from './interatable';

import InteractableStyle from 'mallin-app/src/styles/interactable';

export default class HomeScreen extends React.Component {
	
	constructor(props) {
		super(props);
	}

	renderFooter() {
		return null;
	}

	render() {
		return (
			<InteractableView />
		)
	}
	
	renderContent() {
		return (
			<React.Fragment>
				<ShowMap />
				<InteractableView />
			</React.Fragment>
		)
	}
}
