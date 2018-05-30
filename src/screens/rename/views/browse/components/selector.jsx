//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Button from './button.jsx';
import Folder from './folder.jsx';
import Label from './label.jsx';
import Spinner from './spinner.jsx';

const Selector = ({ stage, handleConfigure, handleBrowse }) => {
	return (
		<div id='selector'>
			<Spinner isSpinning={stage === 'loading' ? true : false} />
			<Folder match={stage === 'browse' ? true : false} position={{ top: '-37.5px', left: '157.5px' }} extention='js' />
			<Folder
				match={stage === 'browse' ? true : false}
				position={{ top: '147.5px', right: '-27.5px' }}
				extention='doc'
			/>
			<Folder
				match={stage === 'browse' ? true : false}
				position={{ bottom: '-37.5px', left: '157.5px' }}
				extention='pdf'
			/>
			<Folder
				match={stage === 'browse' ? true : false}
				position={{ top: '147.5px', left: '-27.5px' }}
				extention='jpg'
			/>
			<div id='selector-stage'>
				<Button match={stage === 'browse' ? true : false} handler={handleBrowse} label='Browse' icon='search' />
				<Button
					match={stage === 'configure' ? true : false}
					handler={handleConfigure}
					label='Configure'
					icon='settings_applications'
				/>
				<Label match={stage === 'loading' ? true : false} label='Loading...' icon='layers' />
			</div>
		</div>
	);
};

Selector.propTypes = {
	stage: PropTypes.string.isRequired,
	handleBrowse: PropTypes.func.isRequired,
	handleConfigure: PropTypes.func.isRequired,
};

export default Selector;
