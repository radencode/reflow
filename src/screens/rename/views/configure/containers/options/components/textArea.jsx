import PropTypes from 'prop-types';
import React from 'react';

class TextArea extends React.Component {
	handleResize = evt => {
		let textarea = evt.target;
		let messageStyles = window.getComputedStyle(textarea);
		let messagePadding = parseInt(messageStyles.paddingTop) + parseInt(messageStyles.paddingBottom);
		textarea.style.height = 'auto';
		let messageHeight = textarea.scrollHeight - messagePadding;
		textarea.style.height = messageHeight + 'px';
	};

	render() {
		return (
			<div class='option textarea'>
				<div class='input-name'>{this.props.name}</div>
				<textarea class='input-textarea' onChange={this.handleResize} />
			</div>
		);
	}
}

TextArea.propTypes = { name: PropTypes.string.isRequired };

export default TextArea;
