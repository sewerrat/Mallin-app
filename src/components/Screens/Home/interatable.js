import React from 'react';
import Interactable from 'react-native-interactable';
import { Text } from 'native-base';

export default class InteractableView extends React.Component {
  render() {
    return (
      <Interactable.View
        horizontalOnly={true}
        snapPoints={[{x: 0}, {x: -200}]}
        onSnap={this.onDrawerSnap}>
        <Text>abc</Text>
      </Interactable.View>
    )
  }
}