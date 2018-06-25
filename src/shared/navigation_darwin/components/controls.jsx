//React modules
import React from 'react';

//Electron modules
const Remote = require('electron').remote;

//Components
import Button from './button.jsx';

class Controls extends React.Component {
	constructor() {
		super();

		//Set default window state to maximize icon
		this.state = { fullscreen: true, disabled: false, icon: false };

		//Get current window object from electron remote
		this.window = Remote.getCurrentWindow();

		//Disable drag and drop into window functionality
		document.body.addEventListener('dragover', this.onDragOver, false);
		document.body.addEventListener('drop', this.onDrop, false);
		this.window.on('focus', this.enableControls);
		this.window.on('blur', this.disabledControls);
	}

	componentWillUnmount() {
		//Remove event listners
		document.body.removeEventListener('dragover', this.onDragOver, false);
		document.body.removeEventListener('drop', this.onDrop, false);
		this.window.removeListener('focus', this.enableControls);
		this.window.removeListener('blur', this.disabledControls);
	}

	//Disable and enable controls on focus and blur
	disabledControls = () => this.setState({ ...this.state, disabled: true });
	enableControls = () => this.setState({ ...this.state, disabled: false });

	//Prevent drag and drop
	onDragOver = event => {
		event.dataTransfer.effectAllowed = 'move';
		event.preventDefault();
	};
	onDrop = event => event.preventDefault();

	//Define action for each control button
	minimize = () => this.window.minimize();
	fullscreen = () => {
		this.window.setFullScreen(true);
		this.setState({ ...this.state, fullscreen: false });
	};
	restore = () => {
		this.window.setFullScreen(false);
		this.setState({ ...this.state, fullscreen: true });
	};
	exit = () => this.window.close();

	//Show and hide icon
	showIcon = () => this.setState({ ...this.state, icon: true });
	hideIcon = () => this.setState({ ...this.state, icon: false });

	render() {
		return (
			<div id='controls' onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}>
				<Button
					type='exit'
					action={this.exit}
					disabled={this.state.disabled}
					icon={this.state.disabled ? false : this.state.icon}
				/>
				<Button
					type='minimize'
					action={this.minimize}
					disabled={this.state.disabled || !this.state.fullscreen ? true : false}
					icon={this.state.disabled || !this.state.fullscreen ? false : this.state.icon}
				/>
				<Button
					type={this.state.fullscreen ? 'fullscreen' : 'restore'}
					action={this.state.fullscreen ? this.fullscreen : this.restore}
					disabled={this.state.disabled}
					icon={this.state.disabled ? false : this.state.icon}
				/>
			</div>
		);
	}
}

export default Controls;
