export function window(text){
	switch(text){
		case 'title':
			return 'Reflow - file manager';
		default:
			return '';
	}
}

export function message(text){
	switch(text){
		case 'message':
			return 'Are you sure you want to continue? All progress will be lost.';
		case 'continue':
			return 'Continune';
		case 'cancel':
			return 'Cancel';
		default:
			return '';
	}
}

export function navigation(text){
	switch(text){
		case 'rename-title':
			return 'Rename';
		case 'file-structure-title':
			return 'File Structure';
		case 'history-title':
			return 'History';
		case 'settings-title':
			return 'Settings';
		default:
			return '';
	}
}

export function progress(text){
	switch(text){
		case 'browse-title':
			return 'Browse';
		case 'configure-title':
			return 'Configure';
		case 'options-title':
			return 'Options';
		case 'finalize-title':
			return 'Finalize';
		default:
			return '';
	}
}

export function browse(text){
	switch(text){
		case 'select-prompt':
			return 'Select the files that you wish to rename.';
		case 'browse-button':
			return 'Browse';
		case 'selected-message':
			return ' files have been selected';
		case 'browse-again-link':
			return 'Browse again';
		case 'configure-button':
			return 'Confugure';
		default:
			return '';
	}
}

export function configure(text){
	switch(text){
		case 'files-loading-screen':
			return 'Loading files...';
		case 'options-loading-screen':
			return 'Loading options...';
		case 'attributes-loading-screen':
			return 'Loading attributes...';
		case 'sort-select':
			return 'Select';
		case 'sort-type':
			return 'Type';
		case 'sort-original-name':
			return 'Original Name';
		case 'sort-new-name':
			return 'New Name';
		case 'sort-size':
			return 'Size';
		case 'filters-button':
			return 'Filters';
		case 'default-option-title':
			return 'Attribute Options';
		case 'default-option-list':
			return 'No attribute selected';
		case 'search-files-placeholder':
			return 'Search original name...';
		case 'search-attributes-placeholder':
			return 'Search attributes...';
		case 'settings-delete-button':
			return 'Delete file from list';
		case 'settings-cancel-button':
			return 'Cancel';
		case 'check-options-button':
			return 'Check options';
		case 'uncheck-options-button':
			return 'Uncheck options';
		case 'delete-options-button':
			return 'Delete options';
		default:
			return '';
	}
}