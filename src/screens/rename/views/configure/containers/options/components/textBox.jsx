import PropTypes from 'prop-types';
import React from 'react';

class TextBox extends React.Component {
	constructor(props) {
		super();
		this.state = { value: props.value };
	}

	handleChange = evt => {
		this.props.updateAttributeOptions(this.props.optionIndex, evt.target.value);
		this.setState({ value: evt.target.value });
	};

	render() {
		return (
			<div class='option textbox'>
				<div class='input-name'>{this.props.name}</div>
				<input class='input-text' type='text' onChange={this.handleChange} value={this.state.value} />
			</div>
		);
	}
}

TextBox.propTypes = {
	name: PropTypes.string.isRequired,
	optionIndex: PropTypes.number.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default TextBox;
