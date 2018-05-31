const defaultState = {
	isOn: true,
	message: 'There are no changes made to the original files.', 
	prompt: 'Please add at least one attribute before proceeding.',
	buttons: [],
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
	case 'ALERT_UPDATE':
		return {
			...state,
			isOn: action.payload,
		};
	default:
		return state;
	}
}