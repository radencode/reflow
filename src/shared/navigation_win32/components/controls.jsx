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
		this.state = { maximize: true };

		//Get current window object from electron remote
		this.window = Remote.getCurrentWindow();

		//Disable drag and drop into window functionality
		document.body.addEventListener('dragover', this.onDragOver, false);
		document.body.addEventListener('drop', this.onDrop, false);

		//Add event listners on max and restore control button
		this.window.on('maximize', this.onMaximize);
		this.window.on('unmaximize', this.onRestore);
	}

	componentWillUnmount() {
		//Remove event listners
		document.body.removeEventListener('dragover', this.onDragOver, false);
		document.body.removeEventListener('drop', this.onDrop, false);
		this.window.removeListener('maximize', this.onMaximize);
		this.window.removeListener('unmaximize', this.onRestore);
	}

	//Prevent drag and drop
	onDragOver = event => {
		event.dataTransfer.effectAllowed = 'move';
		event.preventDefault();
	};
	onDrop = event => event.preventDefault();

	//Update state based on max/restore state
	onMaximize = () => this.setState({ maximize: false });
	onRestore = () => this.setState({ maximize: true });

	//Define action for each control button
	minimize = () => this.window.minimize();
	maximize = () => this.window.maximize();
	restore = () => this.window.unmaximize();
	exit = () => this.window.close();

	render() {
		return (
			<div id='controls'>
				<Button type='minimize' action={this.minimize} />
				<Button
					type={this.state.maximize ? 'maximize' : 'restore'}
					action={this.state.maximize ? this.maximize : this.restore}
				/>
				<Button type='exit' action={this.exit} />
			</div>
		);
	}
}

export default Controls;
