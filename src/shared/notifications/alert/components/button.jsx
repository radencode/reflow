//React modules
import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
	handleClick = () => {
		this.props.alert.closeAlert();
		if (!this.props.onClick) return;
		if (this.props.err) {
			this.props.onClick(this.props.err);
			return;
		}
		this.props.onClick();
	};

	render() {
		return (
			<div class='alert-button' onClick={this.handleClick}>
				{this.props.label}
			</div>
		);
	}
}

Button.propTypes = {
	alert: PropTypes.object.isRequired,
	err: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

export default Button;
