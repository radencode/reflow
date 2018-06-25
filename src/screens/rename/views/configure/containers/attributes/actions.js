export function applyAttribute(tagId, tagType, name, options) {
	return {
		type: 'ATTRIBUTE_DATA_ADD',
		payload: {
			tagId,
			tagType,
			name,
			options,
		},
	};
}

export function deleteAttribute(id) {
	return {
		type: 'ATTRIBUTE_DATA_DELETE',
		payload: id,
	};
}

export function updateActiveId(id) {
	return {
		type: 'ATTRIBUTE_DATA_UPDATE_ACTIVE_ID',
		payload: id,
	};
}

export function updateOptions(id, options) {
	return {
		type: 'ATTRIBUTE_DATA_UPDATE_OPTIONS',
		payload: {
			id,
			options,
		},
	};
}

export function updateIds() {
	return {
		type: 'ATTRIBUTE_DATA_UPDATE_IDS',
	};
}

export function update(attributes) {
	return {
		type: 'ATTRIBUTE_DATA_UPDATE',
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

export function updateScrollPosition(position) {
	return {
		type: 'ATTRIBUTE_SCROLL_POSITION_UPDATE',
		payload: position,
	};
}

export function clearData() {
	return {
		type: 'ATTRIBUTES_CLEAR_DATA',
	};
}
