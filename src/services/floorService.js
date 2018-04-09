import axios from 'axios';
import apiConst from 'mallin-app/src/const/api';
export default {
  load: async (query) => {
    const responseTest = [
			{
				id:1,
				name:'1'
			},
			{
				id:2,
				name:'2'
			},
			{
				id:3,
				name:'3'
			},
		];
		try {
			const buildingID = query.buildingID;
			const response = await axios.get(`${apiConst.url}/building/detail/${buildingID}`);
			if (response.data) {
				 return response.data.floors;
			}
			
		} catch (ex) {
			console.log(ex);	
		}
    return responseTest;
	}
	
};