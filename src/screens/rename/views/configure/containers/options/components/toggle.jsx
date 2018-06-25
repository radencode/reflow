import PropTypes from 'prop-types';
import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
		super();
		this.state = { isToggleOn: props.value };
	}

	handleClick = () => {
		this.props.updateAttributeOptions(this.props.optionIndex, !this.state.isToggleOn);
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
	name: PropTypes.string.isRequired,
	optionIndex: PropTypes.number.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	value: PropTypes.bool.isRequired,
};

export default Toggle;
