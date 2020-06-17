
const INITIAL_STATE = {
	Hello:[]
};
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "SAVE_DATA":
			return {
				...state,
				authenticated: true,
				token: action.payload.token,
			};
		case "UPDATE_DATA":
			return {
				...state,
				authenticated: false,
				token: '',
			};
		default:
			return state;
	}
}
