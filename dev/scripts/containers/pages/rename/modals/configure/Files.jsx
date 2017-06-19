//Modules
import React from 'react';

export default class Files extends React.Component{
	render(){
		return(
			<div class="files">
				<div class="search-bar">
					<input class="search" type="text" placeholder="Search results..." onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Search results...'}></input>
					<button class="filters">Filters</button>
					<div class="headers"></div>
				</div>
			</div>
		);
	}
}