import { StyleSheet, Dimensions } from 'react-native';
import {getScreen} from 'mallin-app/src/utils/common';

const Screen = getScreen();

export const InteractableMapStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: Screen.height + 300,
    padding: 20,
    backgroundColor: '#f7f5eee8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4
  },
  panelHeader: {
    alignItems: 'center'
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  photo: {
    width: Screen.width-40,
    height: 225,
    marginTop: 30
  },
  map: {
    height: Screen.height,
    width: Screen.width
  }
});

export default interactable = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: 'white',
    },
    header: {
      height: 75,
      paddingTop: 22,
      paddingLeft: 20,
      flexDirection: 'row',
      backgroundColor: '#5894f3',
      alignItems: 'center',
      zIndex: 1001
    },
    body: {
      flex: 1,
      zIndex: 1000
    },
    menuContainer: {
      flex: 1,
      paddingTop: 15,
      paddingLeft: 40
    },
    menuIcon: {
      width: 30,
      height: 30
    },
    headerTitle: {
      marginLeft: 30,
      color: 'white',
      fontSize: 20
    },
    seperatorText: {
      color: '#000000',
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
      fontSize: 20,
      fontWeight: '800'
    },
    button: {
      color: '#000000',
      fontSize: 20,
      marginBottom: 24
    },
    button2: {
      color: '#F09B95',
      fontSize: 20,
      marginBottom: 24
    }
  });

  