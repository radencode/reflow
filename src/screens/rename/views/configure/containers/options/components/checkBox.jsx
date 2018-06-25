import PropTypes from 'prop-types';
import React from 'react';

class CheckBox extends React.Component {
	constructor(props) {
		super();
		this.state = { isChecked: props.value };
	}

	handleClick = () => {
		this.props.updateAttributeOptions(this.props.optionIndex, !this.state.isChecked);
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
	name: PropTypes.string.isRequired,
	optionIndex: PropTypes.number.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	value: PropTypes.bool.isRequired,
};

export default CheckBox;
