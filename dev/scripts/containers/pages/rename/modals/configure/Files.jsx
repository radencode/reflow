//Modules
import React from 'react';
import { connect } from 'react-redux';
//Components
import Sort from 'containers/pages/rename/modals/configure/Sort.jsx';
import File from 'containers/pages/rename/modals/configure/File.jsx';
//Action
import * as files_action from 'actions/files';

@connect((store) => {
  return {
    files: store.files,
  };
}) 
export default class Files extends React.Component{
	constructor(props){
		super();
		const _files = [
			{
				type: 'txt',
				original: 'PC Build Chart',
				new: '...',
				size: '403.2KB',
				key: 0
			},
			{
				type: 'png',
				original: 'DSC0529',
				new: '...',
				size: '4.5MB',
				key: 1
			},
			{
				type: 'avi',
				original: 'Holiday vacation',
				new: '...',
				size: '1.3GB',
				key: 2
			},
			{
				type: 'jpg',
				original: 'Screenshot',
				new: '...',
				size: '305MB',
				key: 3
			},
			{
				type: 'txt',
				original: 'PC Build Chart',
				new: '...',
				size: '403.2KB',
				key: 4
			},
			{
				type: 'png',
				original: 'DSC0529',
				new: '...',
				size: '4.5MB',
				key: 5
			},
			{
				type: 'avi',
				original: 'Holiday vacation',
				new: '...',
				size: '1.3GB',
				key: 6
			},
			{
				type: 'jpg',
				original: 'Screenshot',
				new: '...',
				size: '305MB',
				key: 7
			}
		];
		_files.map(file => props.dispatch(files_action.add_file(file)));
	}
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
				<ul class="file-list">
					{this.props.files.map(file => <File type={file.type} original={file.original} new={file.new} size={file.size} key={file.key}/>)}
				</ul>
			</div>
		);
	}
}