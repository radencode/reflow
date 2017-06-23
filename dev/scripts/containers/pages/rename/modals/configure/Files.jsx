//Modules
import React from 'react';
//Components
import Sort from 'containers/pages/rename/modals/configure/Sort.jsx';

export default class Files extends React.Component{
	render(){
		return(
			<div class="files">
				<div class="search-bar">
					<input class="search" type="text" placeholder="Search results..." onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Search results...'}></input>
					<button class="filters">Filters</button>
				</div>
				<div class="sort-list">
					<Sort name="type" label="Type" id={0}/>
					<Sort name="original" label="Original Name" id={1}/>
					<Sort name="new" label="New Name" id={2}/>
					<Sort name="size" label="Size" id={3}/>
				</div>
			</div>
		);
	}
}