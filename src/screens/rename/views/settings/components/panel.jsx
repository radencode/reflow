import PropTypes from 'prop-types';
import React from 'react';

const Panel = ({ active, children }) => {
	return <div class={`panel ${active ? 'active' : 'inactive'}`}>{children}</div>;
};

Panel.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired,
};

export default Panel;
