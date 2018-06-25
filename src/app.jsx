//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//Redux modules
import { connect } from 'react-redux';

//Shared
import Alert from 'shared/notifications/alert';
import Nav_Darwin from 'shared/navigation_darwin';
import Nav_Win32 from 'shared/navigation_win32';

//Screens
import File from 'screens/file/file.jsx';
import History from 'screens/history/history.jsx';
import Rename from 'screens/rename';
import Settings from 'screens/settings/settings.jsx';

//Global styles
import 'styles/main.sass';
const App = ({ history, location, filesLoading }) => {
	const Navigation = process.env.PLATFORM === '--osx' ? Nav_Darwin : Nav_Win32;
	return (
		<div id='root'>
			<Alert />
			<Navigation history={history} />
			<div class={`viewer ${filesLoading ? 'disabled' : ''}`}>
				<TransitionGroup style={{ width: '100%', height: '100%', position: 'relative' }}>
					<CSSTransition
						key={location.pathname.substr(0, location.pathname.lastIndexOf('/')) || 'root'}
						timeout={300}
						classNames='fade'
					>
						<Switch location={location}>
							<Route path='/app/rename' render={props => <Rename {...props} />} />
							<Route path='/app/file' render={props => <File {...props} />} />
							<Route path='/app/history' render={props => <History {...props} />} />
							<Route path='/app/settings' render={props => <Settings {...props} />} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</div>
	);
};

App.propTypes = {
	filesLoading: PropTypes.bool.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		filesLoading: state.rename.files.loader.isLoading,
	};
};

export default connect(mapStateToProps, null)(App);
