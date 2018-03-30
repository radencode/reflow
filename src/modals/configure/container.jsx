//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Files from './components/files.jsx';
import Options from './components/options.jsx';
import Tags from './components/tags.jsx';

//Actions
import * as progressActions from 'progress/actions';
import * as configureActions from './actions';

class Configure extends React.Component {
	constructor(props) {
		super(props);
	}

	handleOptions = () => {
		this.props.history.push('/app/rename/options');
		this.props.actions.progress.progressToConfigure('down');
	};

	render() {
		return (
			<div class='rename-child configure'>
				<div class='viewer'>
					<Files files={this.props.configure.files} actions={this.props.actions} />
					<Tags tags={this.props.configure.tags} actions={this.props.actions} />
					<Options />
				</div>
			</div>
		);
	}
}

Configure.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	configure: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
