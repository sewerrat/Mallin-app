import React from "react";
import { StatusBar } from "react-native";
import { 
	Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem,
	List, ListItem, Thumbnail
} from "native-base";

import MainFrame from "../MainFrame";
import ShowMap from 'mallin-app/src/containers/ShowMap';

export default class HomeScreen extends MainFrame {
	
	constructor(props) {
		super(props);
		this.props.loadBuildings();
	}

	chooseBuilding(id) {
		this.props.chooseBuilding(id);
		this.props.navigation.navigate('Floors');
	}

	renderList() {
		if(!this.props.buildings) {
			return null;
		}
		return (
			<List>
				{this.props.buildings.map(building => (
					<ListItem 
						key={`building-list-${building._id}`} 
						onPress={() => this.chooseBuilding(building._id)}
						icon>
						 <Left>
							<Icon name="home" />
						</Left>
						<Body>
							<Text>{building._id}</Text>
							<Text note>{building.name}</Text>
						</Body>
					</ListItem>		
				))}
			</List>
		)
	}
	renderContent() {
		return (
			<React.Fragment>
				<Content padder>
					<Card>
						<CardItem>
							<Body>
								<Text>List buildings</Text>
							</Body>
						</CardItem>
					</Card>
					{this.renderList()}
					<ShowMap />
				</Content>
			</React.Fragment>
		)
	}
}
