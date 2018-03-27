//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Electron modules
const { dialog } = require('electron').remote;

//Components
import Selector from './components/selector.jsx';
import Messages from './components/messages.jsx';

//Actions
import * as progressActions from 'progress/actions';
import * as configureActions from 'modals/configure/actions';

//Reflow API
import APIController from 'app/lib/reflow';

class Browse extends React.Component {
	constructor() {
		super();
		this.state = { stage: 'browse' };
		this.reflow = new APIController();
	}

	handleBrowse = async () => {
		dialog.showOpenDialog({ properties: ['openDirectory'] }, async path => {
			if (path) {
				this.setState({ stage: 'loading' });
				try {
					const files = await this.reflow.fetchFiles(path);
					const count = await this.reflow.fetchFilesCount();
					this.props.actions.configure.addFiles(files);
					this.props.actions.configure.setCount(count);
					this.setState({ stage: 'configure' });
				} catch (err) {
					this.setState({ stage: 'browse' });
				}
			}
		});
	};

	handleConfigure = () => {
		this.props.history.push('/app/rename/configure');
		this.props.actions.progress.progressToConfigure('up');
	};

	render() {
		return (
			<div class='rename-child browse'>
				<main>
					<Selector handleBrowse={this.handleBrowse} handleConfigure={this.handleConfigure} stage={this.state.stage} />
					<Messages count={this.props.configure.filesCount} handleBrowse={this.handleBrowse} stage={this.state.stage} />
				</main>
			</div>
		);
	}
}

Browse.propTypes = {
	actions: PropTypes.object.isRequired,
	configure: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		configure: state.configure,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			progress: bindActionCreators(progressActions, dispatch),
			configure: bindActionCreators(configureActions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
