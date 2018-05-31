//React modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const Alert = ({ isOn, message, prompt, buttons }) => {
	return <div class={`alert ${isOn ? 'on' : 'off'}`}>
		<div class='alert-board'>
			<h1>{message}</h1>
			<div class='buttons'>
				{buttons}
			</div>
		</div>	
	</div>;
};

Alert.propTypes = {
	isOn: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	prompt: PropTypes.string.isRequired,
	buttons: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
	return {
		isOn: state.alert.isOn,
		message: state.alert.message,
		prompt: state.alert.prompt,
		buttons: state.alert.buttons,
	};
};

export default connect(mapStateToProps, null)(Alert);
