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

	renderContent() {
		return (
			<React.Fragment>
				<Content padder>
					<ShowMap />
				</Content>
			</React.Fragment>
		)
	}
}
