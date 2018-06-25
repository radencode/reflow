//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Electron modules
const { shell } = require('electron').remote;

//Components
import Folder from './components/folder.jsx';
import Progress from './components/progress.jsx';
import Selector from './components/selector.jsx';

//Actions
import * as alert_actions from 'shared/notifications/alert/actions';
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as options_actions from 'screens/rename/views/configure/containers/options/actions';
import * as progress_ctions from 'shared/progress/actions';
import * as settings_actions from 'screens/rename/views/settings/actions';
import * as tags_actions from 'screens/rename/views/configure/containers/tags/actions';

//Reflow API
import APIController from 'lib/reflow';

class Settings extends React.Component {
	constructor(props) {
		super();
		this.state = { loading: true, loaded: false, openFolder: false, message: 'Preparing files...', progress: 0 };
		this.loadedTimeout = null;
		this.openFolderTimeout = null;
		this.openFolderLocation = props.store.files.path;
		this.progressInterval = null;
		this.reflow = new APIController();
	}

	componentDidMount() {
		this.renameFiles();
		setTimeout(this.getProgress, 500);
	}

	componentWillUnmount() {
		if (this.loadedTimeout) clearTimeout(this.loadedTimeout);
		if (this.openFolderTimeout) clearTimeout(this.openFolderTimeout);
		if (this.progressInterval) clearInterval(this.progressInterval);
	}

	getExistsStrategyIndex = strategy => {
		switch (strategy) {
		case 'skip':
			return 'Skip';
		case 'replace':
			return 'Replace';
		case 'keepBoth':
			return 'KeepBoth';
		case 'moveToFolder':
			return 'MoveOrignalToFolder';
		case 'none':
			return 'None';
		default:
			return 'Skip';
		}
	};

	renameFiles = async () => {
		try {
			await this.reflow.renameFiles({
				BackupFolder: this.props.store.settings.backupPath,
				CreateBackup: this.props.store.settings.backup === 'no' ? false : true,
				FileExistsFolder: this.props.store.settings.existsPath,
				FileExistsStrategy: this.getExistsStrategyIndex(this.props.store.settings.exists),
				RenameLocation: this.props.store.settings.locationPath,
				RenameType: this.props.store.settings.location,
			});
		} catch (err) {
			if (this.progressInterval) clearInterval(this.progressInterval);
			this.props.actions.alert.openAlert(
				'There has been an error in renaming files',
				[
					{
						label: 'Log Error',
						action: err => {
							console.log(err);
							this.clearRenameState();
							this.props.actions.progress.progressToBrowse('down');
							this.props.history.push('/app/rename/browse');
						},
					},
				],
				err
			);
		}
	};

	clearRenameState = () => {
		this.props.actions.files.clearData();
		this.props.actions.tags.clearData();
		this.props.actions.attributes.clearData();
		this.props.actions.options.clearData();
		this.props.actions.settings.clearData();
		this.props.actions.progress.clearUnsavedData();
	};

	finishLoading = () => {
		clearInterval(this.progressInterval);
		this.setState({ ...this.state, loading: false });
		this.loadedTimeout = setTimeout(() => {
			this.setState({ ...this.state, loaded: true });
			this.openFolderTimeout = setTimeout(() => {
				this.setState({ ...this.state, openFolder: true });
				this.clearRenameState();
			}, 100);
		}, 350);
	};

	handleOpenInFolder = () => {
		shell.openItem(this.openFolderLocation);
	};

	getProgress = () => {
		this.progressInterval = setInterval(async () => {
			try {
				const progress = Math.floor((await this.reflow.getRenameProgress()) * 100);
				console.log(progress);
				if (progress >= 100) {
					this.setProgress(100);
					this.finishLoading();
					return;
				}
				this.setProgress(progress);
			} catch (err) {
				this.props.actions.alert.openAlert(
					'There has been an error in getting renaming progress',
					'Please try again or log error.',
					[
						{
							label: 'Log Error',
							action: err => {
								console.log(err);
							},
						},
					],
					err
				);
			}
		}, 50);
	};

	setProgress = progress => {
		switch (true) {
		case progress >= 0 && progress < 20:
			this.setState({ ...this.state, message: 'Preparing files...', progress });
			break;
		case progress >= 20 && progress < 40:
			this.setState({ ...this.state, message: 'Syncing files...', progress });
			break;
		case progress >= 40 && progress < 60:
			this.setState({ ...this.state, message: 'Applying attributes...', progress });
			break;
		case progress >= 60 && progress < 100:
			this.setState({ ...this.state, message: 'Renaming files...', progress });
			break;
		case progress === 100:
			this.setState({ ...this.state, message: 'Done, all files have been successfully renamed.', progress });
			break;
		default:
			this.setState({ ...this.state, message: 'Preparing files...', progress });
			break;
		}
	};

	render() {
		return (
			<div class='rename-child finalize'>
				<div class='renaming-container'>
					{this.state.loaded ? (
						<Selector handleOpenInFolder={this.handleOpenInFolder} open={this.state.openFolder} />
					) : (
						<Folder loading={this.state.loading} />
					)}
					<Progress progress={this.state.progress} message={this.state.message} />
				</div>
			</div>
		);
	}
}

Settings.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { settings: state.rename.settings, files: state.rename.files } };
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
