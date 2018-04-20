import React from "react";
import { View, Text, Animated } from 'react-native';
import {Button, List, ListItem, Left, Icon, Right, Body, Container, Content, Switch} from 'native-base';
import Interactable from 'react-native-interactable';
//import Interactable from 'react-native-interactable';

import MainFrame from "mallin-app/src/components/Template/MainFrame";

import InteractableStyle from 'mallin-app/src/styles/interactable';
import { InteractableMapStyle } from 'mallin-app/src/styles/interactable';
import { getScreen } from 'mallin-app/src/utils/common';

const Screen = getScreen();
export default class MapMenu extends React.Component {
  constructor(props) {
		super(props);
		this._deltaY = new Animated.Value(Screen.height-100);
  }

  renderPanelHeader() {
    return(
    <View style={InteractableMapStyle.panelHeader}>
      <View style={InteractableMapStyle.panelHandle} />
    </View>
    ) 
  }

  renderFloorList() {
		const floors = this.props.currentBuilding.floors;
		const needSeeAllButon = floors.length > 3;
		if (floors.length == 0) {
			return (
				<Text>No floor found! </Text>
			);
		}
    
    const header = needSeeAllButon? (
			<ListItem itemDivider icon>
				<Left>
					<Icon type="Entypo" name="layers" />
				</Left>
				<Body><Text>Floors</Text></Body>
				<Right>
        <Button transparent light>
            <Text>See all({floors.length})</Text>
          </Button>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem> 
		) : (
			<ListItem itemDivider icon>
				<Left>
				  <Icon type="Entypo" name="layers" />
				</Left>
				<Body><Text>List floors</Text></Body>
				<Right></Right>
			</ListItem>
		);
    var listContent = floors.slice(0,3).map(floor => (
			<ListItem key={`list_floor_${floor._id}`}>
				<Text>{floor.name}</Text>
			</ListItem>
		));
		
		return (
          <List>
						{header}                
						{listContent}
						
          </List>
		)
	}

	renderAreaList() {
		const areas = this.props.currentBuilding.areas;
		const needSeeAllButon = areas.length > 3;
		if (areas.length == 0) {
			return (
				<Text>No area found! </Text>
			);
		}
		var listContent = areas.slice(0,3).map(area => (
			<ListItem icon key={`list_area_${area._id}`}>
        <Left>
          <Icon type='MaterialIcons' name="restaurant" />
        </Left>
        <Body>
          <Text>{area.name}</Text>
        </Body>
				
			</ListItem>
		));

		const header = needSeeAllButon? (
			<ListItem itemDivider icon>
				<Left>
					<Icon  type='Entypo' name="shop" />
				</Left>
				<Body><Text>Shops</Text></Body>
				<Right>
          <Button transparent light>
            <Text>See all({areas.length})</Text>
          </Button>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem> 
		) : (
			<ListItem itemDivider icon>
				<Left>
					<Icon type='Entypo' name="shop" />
				</Left>
				<Body><Text>Shops</Text></Body>
			</ListItem>
		);

		return (

      <List>
        {header}                
        {listContent}
        
      </List>

		)
	}

	renderPromoList() {
		const promos = this.props.currentBuilding.promos;
		const needSeeAllButon = promos.length > 3;
		if (areas.length == 0) {
			return (
				<Text>No area found! </Text>
			);
		}
		var listContent = promos.slice(0,3).map(promo => (
			<ListItem key={`list_promos_${promo._id}`}>
				<Text>{promo.name}</Text>
			</ListItem>
		));

		const header = needSeeAllButon? (
			<ListItem itemDivider icon>
				<Left>
					<Icon  type='MaterialIcons' name="card-giftcard" />
				</Left>
				<Body><Text>Promotions</Text></Body>
				<Right>
					<Text>See all({promos.length})</Text>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem> 
		) : (
			<ListItem itemDivider>
				<Left>
					<Icon  type='MaterialIcons' name="card-giftcard" />
				</Left>
				<Body><Text>Promotions</Text></Body>
				<Right></Right>
			</ListItem>
		);

		return (
			<Container>
        <Content>
          <List>
            {header}                
						{listContent}
						
          </List>
        </Content>
      </Container>
		)
	}
  
  render() {
    return(
      <View style={InteractableMapStyle.panelContainer} pointerEvents={'box-none'}>
        <Animated.View
          pointerEvents={'box-none'}
          style={[InteractableMapStyle.panelContainer, {
          backgroundColor: 'black',
          opacity: this._deltaY.interpolate({
            inputRange: [0, Screen.height-100],
            outputRange: [0.5, 0],
            extrapolateRight: 'clamp'
          })
        }]} />
        <Interactable.View
          verticalOnly={true}
          snapPoints={[{y: 40}, {y: Screen.height-300}, {y: Screen.height-100}]}
          boundaries={{top: -300}}
          initialPosition={{y: Screen.height-100}}
          animatedValueY={this._deltaY}>
          <View style={InteractableMapStyle.panel}>
            {this.renderPanelHeader()}
            {this.renderAreaList()}
            {this.renderFloorList()}
          </View>
        </Interactable.View>
      </View>
    );
  }
}