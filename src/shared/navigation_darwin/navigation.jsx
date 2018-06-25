//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Controls from './components/controls.jsx';
import Menu from './components/menu.jsx';

const Header = ({ history }) => {
	return (
		<div id='header-darwin'>
			<Controls />
			<Menu history={history} />
		</div>
	);
};

Header.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Header;
