const defaultState = {
	isOn: false,
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
	case 'FADEOUT_ON':
		return {
			...state,
			isOn: action.payload,
		};
	default:
		return state;
	}
}
