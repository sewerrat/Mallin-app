import axios from 'axios';
import apiConst from 'mallin-app/src/const/api';

export default {
	load: async (query) => {	
		try {
			const response = await axios.get(`${apiConst.url}/building/test`);	
			const responseData = response.data;
			return responseData;
		} catch (ex) {
			console.log(ex);	
		}
    	return [];
	},
	find: async (id) => {		
		try {
			const response = await axios.get(`${apiConst.url}api/building/detail/${buildingId}`);	
			const responseData = response.data;
			return responseData;
		} catch (ex) {
			console.log(ex);	
		}
    return responseTest;
	},
};