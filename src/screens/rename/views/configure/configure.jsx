//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Containers
import Attributes from './containers/attributes';
import Files from './containers/files';
import Options from './containers/options';
import Tags from './containers/tags';

//Actions
import * as alert_actions from 'shared/notifications/alert/actions';
import * as progress_actions from 'shared/progress/actions';

class Configure extends React.Component {
	handleSettings = () => {
		if (!this.props.store.progress.unsaved) {
			this.props.actions.alert.openAlert(
				'There are no file changes detected.',
				'Please add at least one attribute before continuing.',
				[
					{
						label: 'Okay',
						action: false,
					},
				],
				false
			);
			return;
		}
		let newNames = [];
		for (let i = 0; i < this.props.store.files.count; i++)
			newNames.push(`${this.props.store.files.data[i].newName}.${this.props.store.files.data[i].type}`);
		if (this.props.store.files.count != new Set(newNames).size) {
			this.props.actions.alert.openAlert(
				'There are files detected that contain duplicate names.',
				'If you continue, then (n) will be appended to each duplicate file - Ex: file_name(1)',
				[
					{
						label: 'Continue',
						action: () => {
							this.props.actions.progress.progressToSettings('up');
							this.props.history.push('/app/rename/settings');
						},
					},
					{
						label: 'Cancel',
						action: false,
					},
				],
				false
			);
			return;
		}
		this.props.actions.progress.progressToSettings('up');
		this.props.history.push('/app/rename/settings');
	};

	render() {
		return (
			<div class='rename-child configure'>
				<div class='viewer'>
					<Files />
					<Tags />
					<Attributes />
					<Options />
					<div class='next-to-settings'>
						<div class='next-button' onClick={this.handleSettings}>
							<i class='material-icons'>keyboard_arrow_down</i>
							<h2>Settings</h2>
							<i class='material-icons'>keyboard_arrow_down</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Configure.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { progress: state.rename.progress, files: state.rename.files } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
			progress: bindActionCreators(progress_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
