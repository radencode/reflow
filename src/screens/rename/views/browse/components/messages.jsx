//React modules
import PropTypes from 'prop-types';
import React from 'react';

const Messages = ({ count, handleBrowse, stage }) => {
	return (
		<div id='browse-messages'>
			<h1 class={`message ${stage === 'browse' ? 'active' : 'inactive'}`}>
				Browse all the files that you would like to add to be renamed.
			</h1>
			<h1 class={`message ${stage === 'loading' ? 'active' : 'inactive'}`}>
				Please wait while we prepare your files to be configured.
			</h1>
			<h1 class={`message ${stage === 'configure' ? 'active' : 'inactive'}`}>
				<span>{count}</span> files were selected.
			</h1>
			<h3 class={`message ${stage === 'configure' ? 'active' : 'inactive'}`} onClick={handleBrowse}>
				Browse again
			</h3>
		</div>
	);
};

Messages.propTypes = {
	count: PropTypes.number.isRequired,
	handleBrowse: PropTypes.func.isRequired,
	stage: PropTypes.string.isRequired,
};

export default Messages;
