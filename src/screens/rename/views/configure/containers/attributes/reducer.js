const defaultState = {
	data: [],
	count: 0,
	activeId: 0,
	isBeingDragged: false,
	hasBeenDropped: false,
	scrollPosition: 0,
};

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'ATTRIBUTE_DATA_ADD':
		return {
			...state,
			data: [...state.data, { ...action.payload, id: state.count }],
			activeId: state.count,
			count: state.count + 1,
			scrollPosition: state.count + 1,
		};

	case 'ATTRIBUTE_DATA_DELETE':
		return {
			...state,
			data: state.data.filter(attribute => attribute.id !== action.payload),
			count: state.count > 0 ? state.count - 1 : 0,
			scrollPosition: state.scrollPosition > 0 ? state.scrollPosition - 1 : 0,
		};

	case 'ATTRIBUTE_DATA_UPDATE_OPTIONS':
		return {
			...state,
			data: state.data.map(attribute => {
				if (action.payload.id === attribute.id) return { ...attribute, options: action.payload.options };
				return { ...attribute };
			}),
		};

	case 'ATTRIBUTE_DATA_UPDATE_IDS':
		return {
			...state,
			data: state.data.map((attribute, index) => {
				return { ...attribute, id: index };
			}),
		};

	case 'ATTRIBUTE_DATA_UPDATE_ACTIVE_ID':
		return { ...state, activeId: action.payload };

	case 'ATTRIBUTE_DATA_UPDATE':
		return { ...state, data: action.payload };

	case 'ATTRIBUTE_IS_BEING_DRAGGED_STATE_UPDATE':
		return { ...state, isBeingDragged: action.payload };

	case 'ATTRIBUTE_HAS_BEEN_DROPPED_STATE_UPDATE':
		return { ...state, hasBeenDropped: action.payload };

	case 'ATTRIBUTE_SCROLL_POSITION_UPDATE':
		return { ...state, scrollPosition: action.payload };

	case 'ATTRIBUTES_CLEAR_DATA':
		return defaultState;

	default:
		return state;
	}
};
