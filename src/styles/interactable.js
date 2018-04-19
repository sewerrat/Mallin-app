import { StyleSheet } from 'react-native';
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