//React modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Option from './option.jsx';

const Setting = ({ number, options, prompt, value }) => {
	return (
		<div class='setting'>
			<div class='number-label'>{number}</div>
			<h1 class='prompt'>{prompt}</h1>
			<div class='options-container'>
				{options.map((option, index) => (
					<Option key={`settings-option-${index}`} {...option} selected={option.value === value} />
				))}
			</div>
		</div>
	);
};

Setting.propTypes = {
	number: PropTypes.number.isRequired,
	options: PropTypes.array.isRequired,
	prompt: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default Setting;
