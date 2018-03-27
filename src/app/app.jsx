//React modules
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//Containers
import File from 'routes/file/container.jsx';
import Header from 'header/container.jsx';
import History from 'routes/history/container.jsx';
import Rename from 'routes/rename/container.jsx';
import Settings from 'routes/settings/container.jsx';

//Global styles
import './app.sass';

const App = ({ history, location }) => {
	return (
		<div id='root'>
			<Header history={history} />
			<div id='viewer'>
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
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default App;
