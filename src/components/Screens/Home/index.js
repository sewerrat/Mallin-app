import React from "react";
import { StatusBar } from "react-native";
import { 
	Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem,
	List, ListItem, Thumbnail
} from "native-base";

import MainFrame from "mallin-app/src/components/Template/MainFrame";
import ShowMap from 'mallin-app/src/containers/Common/ShowMap';

export default class HomeScreen extends MainFrame {
	
	constructor(props) {
		super(props);
		this.props.loadBuildings();
	}

	rederDebugInfo () {
		return (
			<Card>
				<CardItem header bordered>
					<Text>Debug info</Text>
				</CardItem>
				<CardItem bordered>
					<Body>
						<Text>Building: {this.props.currentBuilding._id}</Text>
					</Body>
				</CardItem>
				<CardItem bordered>
					<Body>
						<Text>Floor: {this.props.currentFloor._id}</Text>
					</Body>
				</CardItem>
				<CardItem bordered>
					<Body>
						<Text>Area: {this.props.currentArea._id}</Text>
					</Body>
				</CardItem>
				<CardItem bordered>
					<Body>
						<Text>Lat: {this.props.location.lat}</Text>
						<Text>Long: {this.props.location.long}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
	
	renderContent() {
		return (
			<React.Fragment>
				<Content padder>
					<ShowMap />
					{this.rederDebugInfo}
				</Content>
			</React.Fragment>
		)
	}
}
