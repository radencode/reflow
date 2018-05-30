//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Controls from './components/controls.jsx';
import Menu from './components/menu.jsx';
import Title from './components/title.jsx';

const Header = ({ history }) => {
	return (
		<div id='header'>
			<Title />
			<Menu history={history} />
			<Controls />
		</div>
	);
};

Header.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Header;
