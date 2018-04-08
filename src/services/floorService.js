import axios from 'axios';
import apiConst from 'mallin-app/src/const/api';
export default {
  loadFloors: async (query) => {
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
			const buildingId = query.buildingId;
			const response = await axios.get('${apiConst.url}/floors/detail/${buildingId}');	
			const responseData = response.data.floors;
			return responseData;
		} catch (ex) {
			console.log(ex);	
		}
    return responseTest;
  }
};