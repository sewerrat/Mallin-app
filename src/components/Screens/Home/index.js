import React from "react";
//import Interactable from 'react-native-interactable';

import MainFrame from "mallin-app/src/components/Template/MainFrame";
import ShowMap from 'mallin-app/src/containers/Common/ShowMap';
import Modal from './modal';
import InteractableView from './interatable';

export default class HomeScreen extends React.Component {
	
	constructor(props) {
		super(props);
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
