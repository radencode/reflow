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
import * as files_actions from 'screens/rename/views/configure/containers/files/actions';
import * as progress_actions from 'shared/progress/actions';
import * as tags_actions from 'screens/rename/views/configure/containers/tags/actions';

//Reflow API
import APIController from 'lib/reflow';

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
					const [files, tags] = await Promise.all([this.reflow.fetchFiles(path), this.reflow.fetchTags()]);
					const count = await this.reflow.fetchFilesCount();
					this.props.actions.files.load(files);
					this.props.actions.tags.load(tags);
					this.props.actions.files.setCount(count);
					this.setState({ stage: 'configure' });
				} catch (err) {
					console.log(new Error('Rename calls error'));
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
					<Messages count={this.props.store.files.count} handleBrowse={this.handleBrowse} stage={this.state.stage} />
				</main>
			</div>
		);
	}
}

Browse.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		store: { files: state.files },
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			files: bindActionCreators(files_actions, dispatch),
			progress: bindActionCreators(progress_actions, dispatch),
			tags: bindActionCreators(tags_actions, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
