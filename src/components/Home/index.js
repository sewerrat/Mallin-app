import React from "react";
import { StatusBar } from "react-native";
import { 
	Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem,
	List, ListItem, Thumbnail
} from "native-base";

import Main from 'mallin-app/src/components/main';

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.props.loadFloors();
	}
	renderList() {
		if(!this.props.floors) {
			return null;
		}
		return (
			<List>
				{this.props.floors.map(floor => (
					<ListItem>
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
					<Button full rounded dark
						style={{ marginTop: 10 }}
						onPress={() => this.props.navigation.navigate("Chat")}>
						<Text>Chat With People</Text>
					</Button>
					<Button full rounded primary
						style={{ marginTop: 10 }}
						onPress={() => this.props.navigation.navigate("Profile")}>
						<Text>Goto Profiles</Text>
					</Button>
				</Content>
			</React.Fragment>
		)
	}

  render() {
    return (
      <Main navigation={this.props.navigation} content={this.renderContent()} />
    );
  }
}
