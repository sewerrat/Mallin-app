import axios from 'axios';
import apiConst from 'mallin-app/src/const/api';
export default {
	load: async (query) => {
		try {
			const buildingID = query.buildingID;
			const response = await axios.get(`${apiConst.url}api/building/detail/${buildingID}`);
			if (response.data) {
				return response.data.floors;
			}

		} catch (ex) {
			console.log(ex);
		}
		return [];
	},

	findByAtlas: async (atlasId) => {
		try {
			const response = await axios.get(`${apiConst.url}app/location/find_floor/${atlasId}`);
			if (response.floors) {
				return response.floors;
			}
		} catch (ex) {
			console.log(ex);
		}
		return null;
	}

};