import PropTypes from 'prop-types';
import React from 'react';

class CheckBox extends React.Component {
	constructor(props) {
		super();
		this.state = { isChecked: props.default };
	}

	handleClick = () => {
		this.setState({ isChecked: !this.state.isChecked });
	};

	render() {
		return (
			<div class='option checkbox'>
				<div class='checkbox-containter'>
					<div class='checkbox-label' onClick={this.handleClick}>
						<i class={`material-icons ${this.state.isChecked ? 'on' : 'off'}`}>done</i>
					</div>
					<input type='checkbox' defaultChecked={this.state.isChecked} />
				</div>
				<span class='input-name'>{this.props.name}</span>
			</div>
		);
	}
}

CheckBox.propTypes = {
	default: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
};

export default CheckBox;
