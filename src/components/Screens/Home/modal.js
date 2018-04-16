import React from 'react';
import {Text,Button} from 'native-base';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';

import {
  ScrollView,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import modalStyle from 'mallin-app/src/styles/modal';

var screen = Dimensions.get('window');

export default class HomeModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={modalStyle.text} key={i}>Elem {i}</Text>);
    }

    return list;
  }

  render() {
    var BContent = <Button onPress={() => this.setState({isOpen: false})} style={[modalStyle.btn, modalStyle.btnModal]}><Text>X</Text></Button>;

    return (
      <View style={modalStyle.wrapper}>
        <Button onPress={() => this.refs.modal1.open()} style={modalStyle.btn}> 
          <Text>Basic modal</Text>
        </Button>
        <Button onPress={() => this.refs.modal2.open()} style={modalStyle.btn}>
          <Text>Position top</Text>
        </Button>
        <Button onPress={() => this.refs.modal3.open()} style={modalStyle.btn}><Text>Position centered + backdrop + disable</Text></Button>
        <Button onPress={() => this.refs.modal4.open()} style={modalStyle.btn}><Text>Position bottom + backdrop + slider</Text></Button>
        <Button onPress={() => this.setState({isOpen: true})} style={modalStyle.btn}><Text>Backdrop + backdropContent</Text></Button>
        <Button onPress={() => this.refs.modal6.open()} style={modalStyle.btn}><Text>Position bottom + ScrollView</Text></Button>
        <Button onPress={() => this.refs.modal7.open()} style={modalStyle.btn}><Text>Modal with keyboard support</Text></Button>

        <Modal zIndex="9999"
          style={[modalStyle.modal, modalStyle.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
            <Text style={modalStyle.text}>Basic modal</Text>
            <Button onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} style={modalStyle.btn}><Text>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Text></Button>
        </Modal>
        <Modal style={[modalStyle.modal, modalStyle.modal2]} backdrop={false}  position={"top"} ref={"modal2"}>
          <Text style={[modalStyle.text, {color: "white"}]}>Modal on top</Text>
        </Modal>

        <Modal style={[modalStyle.modal, modalStyle.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Text style={modalStyle.text}>Modal centered</Text>
          <Button onPress={() => this.setState({isDisabled: !this.state.isDisabled})} style={modalStyle.btn}><Text>Disable ({this.state.isDisabled ? "true" : "false"})</Text></Button>
        </Modal>

        <Modal style={[modalStyle.modal, modalStyle.modal4]} position={"bottom"} ref={"modal4"}>
          <Text style={modalStyle.text}>Modal on bottom with backdrop</Text>
          <Slider style={{width: 200}} value={this.state.sliderValue} onValueChange={(value) => this.setState({sliderValue: value})} />
        </Modal>

        <Modal isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} style={[modalStyle.modal, modalStyle.modal4]} position={"center"} backdropContent={BContent}>
          <Text style={modalStyle.text}>Modal with backdrop content</Text>
        </Modal>

        <Modal style={[modalStyle.modal, modalStyle.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
          <ScrollView>
            <View style={{width: screen.width, paddingLeft: 10}}>
              {this.renderList()}
            </View>
          </ScrollView>
        </Modal>

        <Modal ref={"modal7"} style={[modalStyle.modal, modalStyle.modal4]} position={"center"}>
          <View>
            <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
          </View>
        </Modal>
      </View>
    );
  }

}



