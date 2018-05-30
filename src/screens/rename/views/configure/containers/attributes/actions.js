export function applyAttribute(id, name, options) {
	return {
		type: 'ATTRIBUTE_ADD',
		payload: {
			id,
			name,
			options,
		},
	};
}

export function deleteAttribute(key) {
	return {
		type: 'ATTRIBUTE_DELETE',
		payload: key,
	};
}

export function update(attributes) {
	return {
		type: 'ATTRIBUTE_LIST_UPDATE',
		payload: attributes,
	};
}

export function attributeIsBeingDragged(state) {
	return {
		type: 'ATTRIBUTE_IS_BEING_DRAGGED_STATE_UPDATE',
		payload: state,
	};
}

export function attributeHasBeenDropped(state) {
	return {
		type: 'ATTRIBUTE_HAS_BEEN_DROPPED_STATE_UPDATE',
		payload: state,
	};
}

export function uptateScrollPosition(position) {
	return {
		type: 'ATTRIBUTE_SCROLL_POSITION_UPDATE',
		payload: position,
	};
}
