import React from "react";
import { StatusBar } from "react-native";
import { 
	Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem,
	List, ListItem, Thumbnail
} from "native-base";

import MainFrame from "../MainFrame";

export default class HomeScreen extends MainFrame {
	constructor(props) {
		super(props);
		this.props.loadBuildings();
	}
	renderList() {
		if(!this.props.buildings) {
			return null;
		}
		return (
			<List>
				{this.props.buildings.map(building => (
					<ListItem onPress={() => this.props.chooseBuilding(building.id)}>
						<Thumbnail square size={80} source={{ uri: 'http://192.168.1.16:3000/user/abc.png' }} />
						<Body>
							<Text>{building.id}</Text>
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
				</Content>
			</React.Fragment>
		)
	}
}
