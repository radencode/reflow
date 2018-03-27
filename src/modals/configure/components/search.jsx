//Modules
import PropTypes from 'prop-types';
import React from 'react';

class Search extends React.Component {
	showPlaceHolder = evt => {
		evt.target.placeholder = this.props.placeholder;
	};
	hidePlaceHolder = evt => {
		evt.target.placeholder = '';
	};
	render() {
		return (
			<div class={`search ${this.props.style}`}>
				<div class='search-icon'>
					<i class='material-icons'>search</i>
				</div>
				<input
					class='search-text'
					type='text'
					placeholder={this.props.placeholder}
					onChange={this.props.onChange}
					onFocus={this.hidePlaceHolder}
					onBlur={this.showPlaceHolder}
				/>
			</div>
		);
	}
}

Search.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
};

export default Search;
