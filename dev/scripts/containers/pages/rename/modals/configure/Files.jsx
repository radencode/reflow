//Modules
import React from 'react';
import { connect } from 'react-redux';
//Components
import Sort from 'containers/pages/rename/modals/configure/Sort.jsx';
import File from 'containers/pages/rename/modals/configure/File.jsx';
//Action
import * as files_actions from 'actions/files';
//API
//import * as API from 'core/APIs';

@connect((store) => {
  return {
    files_store: store.files,
  };
}) 
export default class Files extends React.Component{
	constructor(props){
		super();
		//const _files = API.GetFile();
		const _files = [
			{
				Type: 'txt',
				OriginalName: 'PC Build Chart',
				NewName: '...',
				Size: '35KB',
				Key: 0
			},
			{
				Type: 'jpg',
				OriginalName: 'Mountain',
				NewName: '...',
				Size: '403.2KB',
				Key: 1
			},
			{
				Type: 'html',
				OriginalName: 'index',
				NewName: '...',
				Size: '24KB',
				Key: 2
			},
			{
				Type: 'js',
				OriginalName: 'viewer',
				NewName: '...',
				Size: '27MB',
				Key: 3
			},
			{
				Type: 'php',
				OriginalName: 'Account',
				NewName: '...',
				Size: '109.50MB',
				Key: 4
			},
			{
				Type: 'jpg',
				OriginalName: 'River',
				NewName: '...',
				Size: '540KB',
				Key: 5
			},
			{
				Type: 'txt',
				OriginalName: 'School supplies',
				NewName: '...',
				Size: '750.54MB',
				Key: 6
			},
			{
				Type: 'pdf',
				OriginalName: 'Resume',
				NewName: '...',
				Size: '403.2KB',
				Key: 7
			},
			{
				Type: 'psd',
				OriginalName: 'radencode',
				NewName: '...',
				Size: '3.5GB',
				Key: 8
			},
			{
				Type: 'docx',
				OriginalName: 'food',
				NewName: '...',
				Size: '70KB',
				Key: 9
			},
		];
		_files.map(file => props.dispatch(files_actions.add_file(file)));
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
					{this.props.files_store.map((file) => {
						if(file.visibility) return <File type={file.type} original={file.original} new={file.new} size={file.size} id={file.key} key={file.key}/>				
					})}
				</ul>
			</div>
		);
	}
}