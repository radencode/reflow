//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Connector from './components/connector.jsx';
import Frame from './components/frame.jsx';
import Step from './components/step.jsx';

//Actions
import * as alert_actions from 'shared/notifications/alert/actions';
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as options_actions from 'screens/rename/views/configure/containers/options/actions';
import * as progress_ctions from './actions';
import * as settings_actions from 'screens/rename/views/settings/actions';
import * as tags_actions from 'screens/rename/views/configure/containers/tags/actions';

class Progress extends React.Component {
	browseAction = () => {
		if (this.props.store.progress.unsaved) {
			this.props.actions.alert.openAlert(
				'All progress and configurations will be lost.',
				'Are you sure you want to continute?',
				[
					{
						label: 'Continue',
						action: () => {
							this.props.actions.files.clearData();
							this.props.actions.tags.clearData();
							this.props.actions.attributes.clearData();
							this.props.actions.options.clearData();
							this.props.actions.settings.clearData();
							this.props.actions.progress.clearUnsavedData();
							this.props.actions.progress.progressToBrowse('down');
							this.props.history.push('/app/rename/browse');
						},
					},
					{ label: 'Cancel', action: false },
				],
				false
			);
			return;
		}
		this.props.actions.progress.progressToBrowse('down');
		this.props.history.push('/app/rename/browse');
	};

	configureAction = () => {
		this.props.actions.progress.progressToConfigure('down');
		this.props.history.push('/app/rename/configure');
	};

	settingsAction = () => {
		this.props.actions.progress.progressToSettings('down');
		this.props.history.push('/app/rename/settings');
	};

	render() {
		return (
			<div id='progress'>
				<Frame />
				<Step config={this.props.store.progress.steps.browse} handleAction={this.browseAction} />
				<Connector config={this.props.store.progress.connectors.browse_configure} />
				<Step config={this.props.store.progress.steps.configure} handleAction={this.configureAction} />
				<Connector config={this.props.store.progress.connectors.configure_settings} />
				<Step config={this.props.store.progress.steps.settings} handleAction={this.settingsAction} />
				<Connector config={this.props.store.progress.connectors.settings_finalize} />
				<Step
					config={this.props.store.progress.steps.finalize}
					handleAction={() => {
						return;
					}}
				/>
			</div>
		);
	}
}

Progress.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { progress: state.rename.progress } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
			attributes: bindActionCreators(attributes_actions, dispatch),
			files: bindActionCreators(files_actions, dispatch),
			options: bindActionCreators(options_actions, dispatch),
			progress: bindActionCreators(progress_ctions, dispatch),
			settings: bindActionCreators(settings_actions, dispatch),
			tags: bindActionCreators(tags_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
