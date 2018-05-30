//React modules
import PropTypes from 'prop-types';
import React from 'react';

class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			icon: '',
			page: 'rename',
			title: 'rename',
		};
	}

	navigate = path => {
		this.props.history.push(path);
	};

	handleHoverOver = (icon, title) => {
		this.setState({ icon: icon, title: title });
	};

	handleHoverOut = () => {
		this.setState({ icon: '', title: this.state.page });
	};

	render() {
		return (
			<nav id='navigation'>
				<div id='nav-bg' />
				<div id='menu'>
					<svg version='1.1' x='0px' y='0px' viewBox='0 0 449.04 81.472' enableBackground='new 0 0 449.04 81.472'>
						<g>
							<path
								onClick={this.navigate.bind(this, '/app/rename/browse')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-rename', 'rename')}
								onMouseOut={this.handleHoverOut}
								class='link'
								d='M141.241,40.536C108.604,31.758,78.025,17.957,50.393,0H0c38.373,32.122,83.737,56.159,133.474,69.525L141.241,40.536z'
							/>
							<path
								onClick={this.navigate.bind(this, '/app/file')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-file', 'file structure')}
								onMouseOut={this.handleHoverOut}
								class='link'
								d='M138.311,70.791c26.804,6.791,54.841,10.479,83.709,10.681V51.477c-26.183-0.201-51.615-3.547-75.94-9.681L138.311,70.791z'
							/>
							<path
								onClick={this.navigate.bind(this, '/app/history')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-history', 'history')}
								onMouseOut={this.handleHoverOut}
								class='link'
								d='M302.96,41.796c-24.325,6.134-49.756,9.48-75.94,9.681v29.995c28.868-0.202,56.905-3.89,83.709-10.681L302.96,41.796z'
							/>
							<path
								onClick={this.navigate.bind(this, '/app/settings')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-settings', 'settings')}
								onMouseOut={this.handleHoverOut}
								class='link'
								d='M315.566,69.525C365.303,56.159,410.668,32.122,449.04,0h-50.393c-27.633,17.957-58.212,31.758-90.849,40.536L315.566,69.525z'
							/>
						</g>
					</svg>
					<i class={`material-icons route-rename ${this.state.icon === 'route-rename' ? 'active' : ''}`}>mode_edit</i>
					<i class={`material-icons route-file ${this.state.icon === 'route-file' ? 'active' : ''}`}>device_hub</i>
					<i class={`material-icons route-history ${this.state.icon === 'route-history' ? 'active' : ''}`}>timer</i>
					<i class={`material-icons route-settings ${this.state.icon === 'route-settings' ? 'active' : ''}`}>
						settings
					</i>
				</div>
				<div id='nav-title'>
					<h1>{this.state.title}</h1>
				</div>
			</nav>
		);
	}
}

Menu.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Menu;
