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
import * as progress_actions from 'shared/progress/actions';

class Configure extends React.Component {
	handleOptions = () => {
		this.props.history.push('/app/rename/options');
		this.props.actions.progress.progressToOptions('down');
	};

	render() {
		return (
			<div class='rename-child configure'>
				<div class='viewer'>
					<Files />
					<Tags />
					<Attributes />
					<Options />
				</div>
			</div>
		);
	}
}

Configure.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			progress: bindActionCreators(progress_actions, dispatch),
		},
	};
};

export default connect(null, mapDispatchToProps)(Configure);
