import { axiosAuth } from './axios-instances';
const API_BASE_URL = "http://localhost:8080/project/"
export function getEmployeeData() {
	return async function(dispatch) {
		try {
            const response = await axiosAuth.get(API_BASE_URL + 'get');
            console.log(response);
			await dispatch({
				type: "SAVE_DATA",
				payload: response.data.data,
			});
		} catch (e) {
			console.error(e.response.data);
		}
	};
}

export function updateEmployeeData() {
	return async function(dispatch) {
		try {
			const response = await axiosAuth.get(API_BASE_URL + '/poolcampaigns');
			// await dispatch({ type: "UPDATE_DATA", payload: response });
		} catch (e) {
			console.error(e.response.data);
		}
	};
}

