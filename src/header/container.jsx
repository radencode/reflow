//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Controls from './components/controls.jsx';
import Navigation from './components/navigation.jsx';
import Title from './components/title.jsx';

const Header = ({ history }) => {
	return (
		<div id='header'>
			<Title />
			<Navigation history={history} />
			<Controls />
		</div>
	);
};

Header.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Header;
