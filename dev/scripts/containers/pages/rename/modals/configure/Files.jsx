//Modules
import React from 'react';
import { connect } from 'react-redux';
//Components
import Sort from 'containers/pages/rename/modals/configure/Sort.jsx';
import File from 'containers/pages/rename/modals/configure/File.jsx';
//Action
import * as filesActions from 'actions/files';
//API
//import * as API from 'core/APIs';

@connect((store) => {
  return {
    filesStore: store.files,
  };
}) 
export default class Files extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
		//const _files = API.GetFile();
		const files = [
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
		files.map(file => this.props.dispatch(filesActions.addFile(file)));
	}
	updateSearch(event){
		this.props.dispatch(filesActions.searchFiles(event.target.value));
	}
	showPlaceHolder(event){
		event.target.placeholder = 'Search results...';
	}
	hidePlaceHolder(event){
		event.target.placeholder = '';
	}
	render(){	
		return(
			<div class="files">
				<div class="search-bar">
					<input class="search" type="text" placeholder = "Search results..." onChange={this.updateSearch.bind(this)} onFocus={this.hidePlaceHolder.bind(this)} onBlur={this.showPlaceHolder.bind(this)}></input>
					<button class="filters">Filters</button>
				</div>
				<div class="sort-list">
					<Sort type="state" name="select" label="Select" id={0}/>
					<Sort type="word" name="type" label="Type" id={1}/>
					<Sort type="word" name="original" label="Original Name" id={2}/>
					<Sort type="word" name="new" label="New Name" id={3}/>
					<Sort type="word" name="size" label="Size" id={4}/>
				</div>
				<ul class="file-list">
					{this.props.filesStore.map(file => {
						if(file.visibility) return <File select={file.select} settings={file.settings} type={file.type} original={file.original} new={file.new} size={file.size} id={file.key} key={file.key}/>				
					})}
				</ul>
			</div>
		);
	}
}