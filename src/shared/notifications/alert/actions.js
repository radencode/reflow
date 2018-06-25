export function openAlert(message, prompt, buttons, err) {
	return {
		type: 'ALERT_OPEN',
		payload: {
			message,
			prompt,
			buttons,
			err,
		},
	};
}

export function closeAlert() {
	return {
		type: 'ALERT_CLOSE',
	};
}
