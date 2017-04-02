export default {
	Pages: [
		{ 
			Title: 'Rename', 
			Modal: [
				{ 
					Title: 'Browse',
					Buttons: {
						Browse: 'Browse',
						Next: 'Configure',
					},
					Messages: {
						Select: 'Select the files that you wish to rename',
						Selected: ' files have been selected',
						Again: 'Browse again',
					},
				},
				{ 
					Title: 'Configure'
				},
				{ 
					Title: 'Options'
				},
				{ 
					Title: 'Finalize'
				},
			],
		}, 
		{ 
			Title: 'File Structure',
		}, 
		{ 
			Title: 'History'
		}, 
		{ 
			Title: 'Settings'
		}
	],
	Alerts: {
		Unsaved: {
			Message: 'Are you sure you want to continue? All progress will be lost.',
			Buttons: {
				Success: 'Continue',
				Cancel: 'Cancel',
			}
		}		
	},
	Window: {
		Title: ' - Reflow file manager'
	},
}
