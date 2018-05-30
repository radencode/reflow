import PropTypes from 'prop-types';
import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
		super();
		this.state = { isToggleOn: props.default };
	}

	handleClick = () => {
		this.setState({ isToggleOn: !this.state.isToggleOn });
	};

	render() {
		return (
			<div class='option toggle'>
				<div class='input-name'>{this.props.name}</div>
				<div class='input-toggle' onClick={this.handleClick}>
					<span class={`input-toggle-on ${this.state.isToggleOn ? 'on' : 'off'}`}>YES</span>
					<span class={`input-toggle-off ${this.state.isToggleOn ? 'on' : 'off'}`}>NO</span>
					<div class={`input-toggle-button ${this.state.isToggleOn ? 'on' : 'off'}`} />
				</div>
				<input type='checkbox' defaultChecked={this.state.isToggleOn} />
			</div>
		);
	}
}

Toggle.propTypes = {
	default: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
};

export default Toggle;
