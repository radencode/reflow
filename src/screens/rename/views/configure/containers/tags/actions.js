export function load(tags) {
	return {
		type: 'TAGS_DATA_UPDATE',
		payload: tags.map(tag => {
			return {
				id: tag.Id,
				name: tag.Name,
				tagType: tag.TagType,
				options: tag.Options.map(option => {
					switch (option.Type) {
					case 'CheckBox':
						return { type: option.Type, props: { name: option.Name, value: false } };

					case 'CheckList':
						return {
							type: option.Type,
							props: {
								value: option.Items.map(checkbox => {
									return { type: 'CheckBox', props: { name: checkbox.Name, value: checkbox.Default } };
								}),
								listKey: option.Name,
							},
						};

					case 'List':
						return {
							type: option.Type,
							props: {
								list: option.Values,
								value: option.Value,
							},
						};

					case 'NumericBox':
						return { type: option.Type, props: { name: option.Name, value: option.Value } };

					case 'TextArea':
					case 'TextBox':
						return { type: option.Type, props: { name: option.Name, value: '' } };

					case 'Toggle':
						return { type: option.Type, props: { name: option.Name, value: option.Value } };

					default:
						return { name: 'Misapplied tag load' };
					}
				}),
				count: 0,
			};
		}),
	};
}

export function addToTagCount(id) {
	return {
		type: 'TAG_DATA_COUNT_ADD',
		payload: id,
	};
}

export function subtractFromTagCount(id) {
	return {
		type: 'TAG_DATA_COUNT_SUBTRACT',
		payload: id,
	};
}

export function clearData() {
	return {
		type: 'TAG_CLEAR_DATA',
	};
}
