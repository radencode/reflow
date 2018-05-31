const defaultState = {
	isOn: false,
	message: '',
	prompt: '',
	buttons: [],
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
	case 'ALERT_OPEN':
		return {
			...state,
			isOn: true,
			message: action.payload.message,
			prompt: action.payload.prompt,
			buttons: action.payload.buttons,
		};
	case 'ALERT_CLOSE':
		return {
			...state,
			isOn: false,
		};
	default:
		return state;
	}
}
