//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Electron modules
const { dialog } = require('electron').remote;

//Components
import Panel from './components/panel.jsx';
import Setting from './components/setting.jsx';

//Actions
import * as progress_actions from 'shared/progress/actions';
import * as settings_actions from './actions';

class Settings extends React.Component {
	constructor() {
		super();
		this.state = { panel: 'location' };
		this.options = {
			backup: [
				{
					action: () => {
						dialog.showOpenDialog({ properties: ['openDirectory'] }, path => {
							if (path) {
								this.props.actions.settings.setBackupOption('yes', 0);
								this.props.actions.settings.setBackupOptionPath(path[0]);
								this.setState({ ...this.state, panel: 'finalize' });
							}
						});
					},
					label: 'Yes',
					icon: 'create_new_folder',
					value: 'yes',
				},
				{
					action: () => {
						this.props.actions.settings.setBackupOption('no', 1);
						this.setState({ ...this.state, panel: 'finalize' });
					},
					label: 'No',
					icon: 'close',
					value: 'no',
				},
			],
			exists: [
				{
					action: () => {
						this.props.actions.settings.setExistsOption('replace', 0);
						this.setState({ ...this.state, panel: 'finalize' });
					},
					label: 'Replace',
					icon: 'cached',
					value: 'replace',
				},
				{
					action: () => {
						this.props.actions.settings.setExistsOption('skip', 1);
						this.setState({ ...this.state, panel: 'finalize' });
					},
					label: 'Skip',
					icon: 'fast_forward',
					value: 'skip',
				},
				{
					action: () => {
						this.props.actions.settings.setExistsOption('keepBoth', 2);
						this.setState({ ...this.state, panel: 'finalize' });
					},
					label: 'Keep both',
					icon: 'group',
					value: 'keepBoth',
				},
				{
					action: () => {
						dialog.showOpenDialog({ properties: ['openDirectory'] }, path => {
							if (path) {
								this.props.actions.settings.setExistsOption('moveToFolder', 3);
								this.props.actions.settings.setExistsOptionPath(path[0]);
								this.setState({ ...this.state, panel: 'finalize' });
							}
						});
					},
					label: 'Move to folder',
					icon: 'folder_open',
					value: 'moveToFolder',
				},
			],
			location: [
				{
					action: () => {
						this.props.actions.settings.setExistsOption('none', 0);
						this.props.actions.settings.setLocationOption('inplace', 0);
						this.props.actions.settings.setLocationOptionPath(this.props.store.files.path);
						this.setState({ ...this.state, panel: 'backup' });
					},
					label: 'Current Folder',
					icon: 'folder_open',
					value: 'inplace',
				},
				{
					action: () => {
						dialog.showOpenDialog({ properties: ['openDirectory'] }, path => {
							if (path) {
								this.props.actions.settings.setLocationOption('custom', 1);
								this.props.actions.settings.setBackupOption('no', 1);
								this.props.actions.settings.setLocationOptionPath(path[0]);
								this.setState({ ...this.state, panel: 'exists' });
							}
						});
					},
					label: 'New Folder',
					icon: 'create_new_folder',
					value: 'custom',
				},
			],
		};
	}

	handleFinalize = () => {
		this.props.actions.progress.progressToFinalize('up');
		this.props.history.push('/app/rename/finalize');
	};

	render() {
		return (
			<div class='rename-child settings'>
				<div class='setting-container'>
					<Panel active={this.state.panel === 'location' ? true : false}>
						<Setting
							number={1}
							options={this.options.location}
							prompt={'Where would you like to store the renamed files?'}
							value={this.props.store.settings.backup}
						/>
					</Panel>
					<Panel active={this.state.panel === 'backup' ? true : false}>
						<Setting
							number={2}
							options={this.options.backup}
							prompt={'Would you like to create files backup before renaming?'}
							value={this.props.store.settings.backup}
						/>
					</Panel>
					<Panel active={this.state.panel === 'exists' ? true : false}>
						<Setting
							number={2}
							options={this.options.exists}
							prompt={'If any of the new file names already exist in current directory?'}
							value={this.props.store.settings.exists}
						/>
					</Panel>
					<Panel active={this.state.panel === 'finalize' ? true : false}>
						<div class='finalize setting'>
							<div class='number-label'>3</div>
							<h1 class='prompt'>Verify settings and click finalize to rename files.</h1>
							<div class='verify-container'>
								<div
									class='verify'
									onClick={() => {
										this.setState({ ...this.state, panel: 'backup' });
									}}
								>
									<span class='option-type'>Backup files: </span>
									<span class='value'>{this.options.backup[this.props.store.settings.backupActive].label}</span>
									<span class='edit-option'>Edit option</span>
								</div>
								<div
									class='verify'
									onClick={() => {
										this.setState({ ...this.state, panel: 'exists' });
									}}
								>
									<span class='option-type'>If file exists: </span>
									<span class='value'>{this.options.exists[this.props.store.settings.existsActive].label}</span>
									<span class='edit-option'>Edit option</span>
								</div>
							</div>
							<div class='next-to-finalize'>
								<div class='next-button' onClick={this.handleFinalize}>
									<i class='material-icons'>keyboard_arrow_down</i>
									<h2>Finalize</h2>
									<i class='material-icons'>keyboard_arrow_down</i>
								</div>
							</div>
						</div>
					</Panel>
				</div>
			</div>
		);
	}
}

Settings.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return { store: { settings: state.rename.settings, files: state.rename.files } };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			progress: bindActionCreators(progress_actions, dispatch),
			settings: bindActionCreators(settings_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
