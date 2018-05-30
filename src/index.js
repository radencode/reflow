//React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Redux modules
import { Provider } from 'react-redux';

//Redux store
import store from 'redux/store';

//App
import App from 'app.jsx';

const reflow = document.getElementById('reflow');

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/app' render={props => <App {...props} />} />
				<Route path='/' render={() => <Redirect to='/app/rename/browse' />} />
			</Switch>
		</Router>
	</Provider>,
	reflow
);
