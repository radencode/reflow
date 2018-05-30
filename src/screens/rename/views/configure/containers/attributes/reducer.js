const defaultState = {
	list: [],
	count: 0,
	isBeingDragged: false,
	hasBeenDropped: false,
	scrollPosition: 0,
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'ATTRIBUTE_ADD':
		return {
			...state,
			list: [...state.list, { ...action.payload, key: state.count }],
			count: state.count + 1,
			scrollPosition: state.scrollPosition + 1,
		};

	case 'ATTRIBUTE_DELETE':
		return {
			...state,
			list: state.list.filter(attribute => attribute.key !== action.payload),
			count: state.count > 0 ? state.count - 1 : 0,
			scrollPosition: state.scrollPosition > 0 ? state.scrollPosition - 1 : 0,
		};

	case 'ATTRIBUTE_LIST_UPDATE':
		return { ...state, list: action.payload };

	case 'ATTRIBUTE_IS_BEING_DRAGGED_STATE_UPDATE':
		return { ...state, isBeingDragged: action.payload };

	case 'ATTRIBUTE_HAS_BEEN_DROPPED_STATE_UPDATE':
		return { ...state, hasBeenDropped: action.payload };

	case 'ATTRIBUTE_SCROLL_POSITION_UPDATE':
		return { ...state, scrollPosition: action.payload };

	case 'DEFAULT_STATE':
		return defaultState;

	default:
		return state;
	}
};
