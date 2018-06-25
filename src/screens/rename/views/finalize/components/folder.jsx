//React modules
import PropTypes from 'prop-types';
import React from 'react';

class Folder extends React.Component {
	constructor() {
		super();
		this.state = { white: true, yellow: false, file: '' };
		this.extenstions = ['.jpg', '.psd', '.doc', '.js', '.cs', '.mp3', '.zip', '.pdf', '.png', '.mov'];
		this.currentExt = 0;
		this.typingInterval = null;
		this.initialTimeout = null;
		this.typingTimouts = [];
		this.animationTimeout = null;
	}

	componentDidMount() {
		this.typing();
		this.typingInterval = setInterval(this.typing, 2000);
	}

	componentWillUnmount() {
		if (this.typingInterval) clearInterval(this.typingInterval);
		if (this.initialTimeout) clearTimeout(this.initialTimeout);
		if (this.typingTimouts)
			this.typingTimouts.forEach(typingTimeout => {
				if (typingTimeout) clearTimeout(typingTimeout);
			});
		if (this.animationTimeout) clearTimeout(this.animationTimeout);
	}

	typing = () => {
		this.setState({ ...this.state, white: true });
		this.initialTimeout = setTimeout(() => {
			this.setState({ ...this.state, file: '', yellow: false });
			this.extenstions[this.currentExt].split('').forEach((extention, index) => {
				this.typingTimouts[index] = setTimeout(() => {
					this.setState({ ...this.state, file: `${this.state.file}${extention}` });
				}, 100 * index);
			});
			this.animationTimeout = setTimeout(() => {
				this.setState({ ...this.state, white: false, yellow: true });
			}, 900);

			if (this.currentExt <= 8) this.currentExt++;
			else this.currentExt = 0;
		}, 500);
	};

	render() {
		return (
			<div class={`folder-animation-container ${this.props.loading ? 'loading' : ''}`}>
				<svg
					version='1.1'
					x='0px'
					y='0px'
					id='svg-folder-animation-back'
					viewBox='0 0 4.1 1.5'
					enableBackground='new 0 0 4.1 1.5'
				>
					<path
						id='polygon-folder-animation-back'
						d='M3.9,0.8H3.6v0h0.2c-0.1,0-0.2-0.1-0.2-0.2V0.4C3.6,0.2,3.5,0,3.3,0H0.9C0.7,0,0.5,0.2,0.5,0.4v0.2
		c0,0.1-0.1,0.2-0.2,0.2H0.2C0.1,0.8,0,0.9,0,1v0.4c0,0.1,0.1,0.2,0.2,0.2h3.8c0.1,0,0.2-0.1,0.2-0.2V1C4.1,0.9,4.1,0.8,3.9,0.8z'
					/>
				</svg>
				<div class={`folder-paper ${this.state.white ? 'white' : ''}`}>{this.state.file}</div>
				<svg
					id='svg-folder-animation-cover'
					version='1.1'
					x='0px'
					y='0px'
					viewBox='0 0 173.8 106.6'
					enableBackground='new 0 0 173.8 106.6'
				>
					<polygon
						id='polygon-folder-animation-cover'
						points='8.9,1 7.8,0.4 6,0 4.1,0.2 2.5,0.7 1.5,1.5 0.6,2.4 0.1,3.4 0,4 0,102.8 0.3,103.3 0.6,103.8 
			1.1,104.4 1.5,104.8 2.2,105.4 2.8,105.7 4.2,106.3 5.4,106.6 7.3,106.6 168.7,106.6 170.2,106.2 171.5,105.3 172.7,104.3 
			173.2,103.2 173.8,102.2 173.8,4.9 173.6,3.7 173.1,2.6 172.3,1.7 171.3,0.8 170.4,0.2 72.7,0 71.8,0.4 71.1,1 66.7,8.4 66.3,8.7 
			65.5,9.2 64.9,9.5 64,9.7 16.7,9.7 16.2,9.6 15.6,9.2 15,8.5 	'
					/>
				</svg>
				<div class={`folder-label ${this.state.yellow ? 'yellow' : ''}`}>{this.state.file}</div>
			</div>
		);
	}
}

Folder.propTypes = {
	loading: PropTypes.bool.isRequired,
};

export default Folder;
