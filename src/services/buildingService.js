import axios from 'axios';
import apiConst from 'mallin-app/src/const/api';

export default {
	load: async (query) => {
		const responseTest = [
			{
				id:1,
				name:'building 1'
			},
			{
				id:2,
				name:'building 2'
			},
			{
				id:3,
				name:'building 3'
			},
		];
				
		try {
			const response = await axios.get(`${apiConst.url}/building/test`);	
			const responseData = response.data || responseTest;
			return responseData;
		} catch (ex) {
			console.log(ex);	
		}
    return responseTest;
	},
	find: async (id) => {
		const responseTest = {
			id:1,
			name:'building 1',
			floors:[]
		},;
				
		try {
			const response = await axios.get(`${apiConst.url}/building/test`);	
			const responseData = response.data || responseTest;
			return responseData;
		} catch (ex) {
			console.log(ex);	
		}
    return responseTest;
	},
};