const defaultState = {
	list: [],
	name: 'Atttribute',
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'OPTIONS_LIST_UPDATE':
		return { name: action.payload.name, list: action.payload.options };

	case 'DEFAULT_STATE':
		return defaultState;

	default:
		return state;
	}
};
