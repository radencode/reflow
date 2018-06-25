const defaultState = {
	data: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'TAGS_DATA_UPDATE':
		return { ...state, data: action.payload };

	case 'TAG_DATA_COUNT_ADD':
		return {
			...state,
			data: state.data.map(tag => (tag.Id === action.payload ? { ...tag, count: tag.count + 1 } : tag)),
		};

	case 'TAG_DATA_COUNT_SUBTRACT':
		return {
			...state,
			data: state.data.map(tag => (tag.Id === action.payload ? { ...tag, count: tag.count - 1 } : tag)),
		};

	case 'TAG_CLEAR_DATA':
		return defaultState;

	default:
		return state;
	}
};
