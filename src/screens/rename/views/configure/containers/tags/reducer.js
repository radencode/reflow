const defaultState = {
	list: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'TAGS_LIST_UPDATE':
		return { ...state, list: action.payload };

	case 'TAG_COUNT_ADD':
		return {
			...state,
			list: state.list.map(tag => (tag.Id === action.payload ? { ...tag, count: tag.count + 1 } : tag)),
		};

	case 'TAG_COUNT_SUBTRACT':
		return {
			...state,
			list: state.list.map(tag => (tag.Id === action.payload ? { ...tag, count: tag.count - 1 } : tag)),
		};

	case 'DEFAULT_STATE':
		return defaultState;

	default:
		return state;
	}
};
