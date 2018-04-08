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
		this.props.loadBuilding();
	}
	renderList() {
		if(!this.props.floors) {
			return null;
		}
		return (
			<List>
				{this.props.floors.map(floor => (
					<ListItem onPress={() => this.props.navigation.navigate("Chat")}>
						<Thumbnail square size={80} source={{ uri: 'http://192.168.1.16:3000/user/abc.png' }} />
						<Body>
							<Text>{floor.floorID}</Text>
							<Text note>Floor {floor.floorID}</Text>
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
								<Text>List floors</Text>
							</Body>
						</CardItem>
					</Card>
					{this.renderList()}
				</Content>
			</React.Fragment>
		)
	}
}
