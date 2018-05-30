import PropTypes from 'prop-types';
import React from 'react';

class TextBox extends React.Component {
	render() {
		return (
			<div class='option textbox'>
				<div class='input-name'>{this.props.name}</div>
				<input class='input-text' type='text' />
			</div>
		);
	}
}

TextBox.propTypes = { name: PropTypes.string.isRequired };

export default TextBox;
