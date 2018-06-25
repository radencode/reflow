import PropTypes from 'prop-types';
import React from 'react';

class TextArea extends React.Component {
	constructor(props) {
		super();
		this.state = { value: props.value };
	}

	handleChange = evt => {
		const textarea = evt.target;
		const messageStyles = window.getComputedStyle(textarea);
		const messagePadding = parseInt(messageStyles.paddingTop) + parseInt(messageStyles.paddingBottom);
		textarea.style.height = 'auto';
		const messageHeight = textarea.scrollHeight - messagePadding;
		textarea.style.height = messageHeight + 'px';
		this.props.updateAttributeOptions(this.props.optionIndex, evt.target.value);
		this.setState({ value: evt.target.value });
	};

	render() {
		return (
			<div class='option textarea'>
				<div class='input-name'>{this.props.name}</div>
				<textarea class='input-textarea' onChange={this.handleChange} value={this.state.value} />
			</div>
		);
	}
}

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	updateAttributeOptions: PropTypes.func.isRequired,
	optionIndex: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
};

export default TextArea;
