const defaultState = {
	data: [],
	name: 'Atttribute',
	attributeId: 0,
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'OPTIONS_DATA_UPDATE':
		return {
			attributeId: action.payload.attributeId,
			name: action.payload.name,
			tagType: action.payload.tagType,
			data: action.payload.options,
		};

	case 'OPTIONS_CLEAR_DATA':
		return defaultState;

	default:
		return state;
	}
};
