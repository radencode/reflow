export function openAlert(message, prompt, buttons) {
	return {
		type: 'ALERT_OPEN',
		payload: {
			message,
			prompt,
			buttons,
		},
	};
}

export function closeAlert() {
	return {
		type: 'ALERT_CLOSE',
	};
}
