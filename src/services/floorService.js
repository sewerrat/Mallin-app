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
		if(atlasId=='268fde9a-8ce3-415f-9fcb-b303c6822e71') {
			return ({
				"_id": "598995439412f10a09bfce9f",
				"buildingId": "598995249412f10a09bfce9e",
				"name": "Floor 01",
				"mapLayer": "http://res.cloudinary.com/richtervn/image/upload/v1502188864/trss9my9ytypezoyfsey.tiff",
				"overlayImage": "http://res.cloudinary.com/richtervn/image/upload/v1502188866/ycc21riajr8r72qw5kq0.jpg",
				"id_jpg": "ycc21riajr8r72qw5kq0",
				"id_tif": "trss9my9ytypezoyfsey",
				"weight": 1,
				"__v": 0,
				"bounds": [
					[
						20.996985905691563,
						105.85450731217861
					],
					[
						20.996545181962897,
						105.85415594279768
					]
				],
				"atlasId": [
					"268fde9a-8ce3-415f-9fcb-b303c6822e71"
				]
			})
		}
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