//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import AlertButton from './components/button.jsx';

//Actions
import * as alert_actions from './actions';

const Alert = ({ actions, isOn, message, prompt, buttons, err }) => {
	return (
		<div class={`alert ${isOn ? 'on' : 'off'}`}>
			<div class={`alert-board ${isOn ? 'on' : 'off'}`}>
				<div class='message-buttons-container'>
					<h1 class={`alert-message ${isOn ? 'on' : 'off'}`}>{message}</h1>
					<h1 class={`alert-prompt ${isOn ? 'on' : 'off'}`}>{prompt}</h1>
					<div class={`alert-buttons ${isOn ? 'on' : 'off'}`}>
						{buttons.map((button, index) => (
							<AlertButton key={index} label={button.label} onClick={button.action} alert={actions.alert} err={err} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

Alert.propTypes = {
	actions: PropTypes.object.isRequired,
	isOn: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	prompt: PropTypes.string.isRequired,
	buttons: PropTypes.array.isRequired,
	err: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
};

const mapStateToProps = state => {
	return {
		isOn: state.rename.alert.isOn,
		message: state.rename.alert.message,
		prompt: state.rename.alert.prompt,
		buttons: state.rename.alert.buttons,
		err: state.rename.alert.err,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
