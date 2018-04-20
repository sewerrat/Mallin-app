import React from "react";
import { View } from 'react-native';
//import Interactable from 'react-native-interactable';

import MainFrame from "mallin-app/src/components/Template/MainFrame";
import ShowMap from 'mallin-app/src/containers/Common/ShowMap';
import MapMenu from './MapMenu';

import InteractableStyle from 'mallin-app/src/styles/interactable';
import { InteractableMapStyle } from 'mallin-app/src/styles/interactable';

export default class HomeScreen extends React.Component {
	
	constructor(props) {
		super(props);
	}

	renderMenu() {
		if (this.props.currentBuilding) {
			return <MapMenu currentBuilding={this.props.currentBuilding} />
		}
	}

	render1() {
		return <InteractableView />;
	}

	render() {
		return (
			<View style={InteractableStyle.container} testID={'Overview'}>
				<View style={InteractableStyle.body}>
					<View style={InteractableMapStyle.container}>
						<ShowMap />
						{this.renderMenu()}
					</View>
				</View>
			</View>
		)
	}
}
