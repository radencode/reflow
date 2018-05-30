export function load(tags) {
	return {
		type: 'TAGS_LIST_UPDATE',
		payload: tags.map(tag => {
			return {
				...tag,
				Options: tag.Options.map(option => {
					let props = {};
					switch (option.Type) {
					case 'Checkbox': // ** Should be CheckBox for consistency
					case 'CheckBox':
						props = { name: option.Name, default: true }; // ** default **
						break;
					case 'CheckList':
						props = {
							list: [
								{ name: 'Checklist item 1', default: false },
								{ name: 'Checklist item 2', default: true },
								{ name: 'Checklist item 3', default: false },
								{ name: 'Checklist item 4', default: true }, // ** list with key and default **
							],
							name: 'something', // ** key  //
						};
						break;
					case 'List':
						props = {
							list: ['property 1', 'property 2', 'property 3', 'property 4'], // ** list with options and default selected **
							default: 'Select your property',
						};
						break;
					case 'NumericBox':
						props = { name: option.Name, default: 0 }; // ** default **
						break;
					case 'TextArea':
					case 'TextBox':
						props = { name: option.Name };
						break;
					case 'Toggle':
						props = { name: option.Name, default: true }; // ** default **
						break;
					default:
						return option;
					}
					return { ...option, props: props };
				}),
				count: 0,
			};
		}),
	};
}

export function addToTagCount(id) {
	return {
		type: 'TAG_COUNT_ADD',
		payload: id,
	};
}

export function subtractFromTagCount(id) {
	return {
		type: 'TAG_COUNT_SUBTRACT',
		payload: id,
	};
}
