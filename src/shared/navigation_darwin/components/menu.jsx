//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Redux modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import * as alert_actions from 'shared/notifications/alert/actions';
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';
import * as attributes_actions from 'screens/rename/views/configure/containers/attributes/actions';
import * as options_actions from 'screens/rename/views/configure/containers/options/actions';
import * as progress_actions from 'shared/progress/actions';
import * as settings_actions from 'screens/rename/views/settings/actions';
import * as tags_actions from 'screens/rename/views/configure/containers/tags/actions';

class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			icon: '',
			page: 'rename',
			title: 'rename',
		};
	}

	navigate = path => {
		if (this.props.history.location.pathname.indexOf('/app/rename') === 0 && path.indexOf('/app/rename') === 0) return;
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
							this.props.history.push(path);
						},
					},
					{ label: 'Cancel', action: false },
				],
				false
			);
			return;
		}
		this.props.actions.files.clearData();
		this.props.actions.tags.clearData();
		this.props.history.push(path);
	};

	handleHoverOver = (icon, title) => {
		this.setState({ icon: icon, title: title });
	};

	handleHoverOut = () => {
		this.setState({ icon: '', title: this.state.page });
	};

	render() {
		return (
			<nav id='navigation'>
				<div id='nav-bg' />
				<div id='menu'>
					<svg version='1.1' x='0px' y='0px' viewBox='0 0 449.04 81.472' enableBackground='new 0 0 449.04 81.472'>
						<g>
							<path
								onClick={this.navigate.bind(this, '/app/rename/browse')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-rename', 'rename')}
								onMouseOut={this.handleHoverOut}
								class='link'
								d='M141.241,40.536C108.604,31.758,78.025,17.957,50.393,0H0c38.373,32.122,83.737,56.159,133.474,69.525L141.241,40.536z'
							/>
							<path
								onClick={this.navigate.bind(this, '/app/file')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-file', 'file structure')}
								onMouseOut={this.handleHoverOut}
								class='link disabled'
								d='M138.311,70.791c26.804,6.791,54.841,10.479,83.709,10.681V51.477c-26.183-0.201-51.615-3.547-75.94-9.681L138.311,70.791z'
							/>
							<path
								onClick={this.navigate.bind(this, '/app/history')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-history', 'history')}
								onMouseOut={this.handleHoverOut}
								class='link disabled'
								d='M302.96,41.796c-24.325,6.134-49.756,9.48-75.94,9.681v29.995c28.868-0.202,56.905-3.89,83.709-10.681L302.96,41.796z'
							/>
							<path
								onClick={this.navigate.bind(this, '/app/settings')}
								onMouseOver={this.handleHoverOver.bind(this, 'route-settings', 'settings')}
								onMouseOut={this.handleHoverOut}
								class='link disabled'
								d='M315.566,69.525C365.303,56.159,410.668,32.122,449.04,0h-50.393c-27.633,17.957-58.212,31.758-90.849,40.536L315.566,69.525z'
							/>
						</g>
					</svg>
					<i class={`material-icons route-rename ${this.state.icon === 'route-rename' ? 'active' : ''}`}>mode_edit</i>
					{/* <i class={`material-icons route-file ${this.state.icon === 'route-file' ? 'active' : ''}`}>device_hub</i>
					<i class={`material-icons route-history ${this.state.icon === 'route-history' ? 'active' : ''}`}>timer</i>
					<i class={`material-icons route-settings ${this.state.icon === 'route-settings' ? 'active' : ''}`}>
						settings
					</i> */}
				</div>
				<div id='nav-title'>
					<h1>{this.state.title}</h1>
				</div>
			</nav>
		);
	}
}

Menu.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		store: { progress: state.rename.progress },
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			alert: bindActionCreators(alert_actions, dispatch),
			attributes: bindActionCreators(attributes_actions, dispatch),
			files: bindActionCreators(files_actions, dispatch),
			options: bindActionCreators(options_actions, dispatch),
			progress: bindActionCreators(progress_actions, dispatch),
			settings: bindActionCreators(settings_actions, dispatch),
			tags: bindActionCreators(tags_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
