import { StyleSheet } from 'react-native';
import { getScreen } from 'mallin-app/src/utils/common';

const screen = getScreen();
export default map = StyleSheet.create({
	map: {
		width: screen.width-20,
		height:screen.height
	},
	havePermission: {
			flex: 1,
		//backgroundColor: 'red'
	}
});