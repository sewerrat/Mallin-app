import React from "react";
//import Interactable from 'react-native-interactable';

import MainFrame from "mallin-app/src/components/Template/MainFrame";
import ShowMap from 'mallin-app/src/containers/Common/ShowMap';
import Modal from './modal';

export default class HomeScreen extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	renderContent() {
		return (
			<React.Fragment>
				<Content padder>
					<ShowMap />
				</Content>
			</React.Fragment>
		)
	}

	render() {
		return(
			<React.Fragment>
				< Modal />
			</React.Fragment>
		)
	}
}
